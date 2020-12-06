
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
        const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    let flushing = false;
    const seen_callbacks = new Set();
    function flush() {
        if (flushing)
            return;
        flushing = true;
        do {
            // first, call beforeUpdate functions
            // and update components
            for (let i = 0; i < dirty_components.length; i += 1) {
                const component = dirty_components[i];
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        flushing = false;
        seen_callbacks.clear();
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }
    const outroing = new Set();
    let outros;
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const prop_values = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_update: [],
            after_update: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, prop_values, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.29.6' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/components/global/Topbar.svelte generated by Svelte v3.29.6 */

    const file = "src/components/global/Topbar.svelte";

    function create_fragment(ctx) {
    	let nav;
    	let div2;
    	let div0;
    	let img;
    	let img_src_value;
    	let t0;
    	let span;
    	let t2;
    	let div1;
    	let a0;
    	let t4;
    	let a1;
    	let svg;
    	let path;

    	const block = {
    		c: function create() {
    			nav = element("nav");
    			div2 = element("div");
    			div0 = element("div");
    			img = element("img");
    			t0 = space();
    			span = element("span");
    			span.textContent = "PIXSS";
    			t2 = space();
    			div1 = element("div");
    			a0 = element("a");
    			a0.textContent = "Document";
    			t4 = space();
    			a1 = element("a");
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr_dev(img, "class", "logo svelte-1h1c67x");
    			if (img.src !== (img_src_value = "./static/app-small.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "logo");
    			add_location(img, file, 27, 6, 420);
    			attr_dev(span, "class", "svelte-1h1c67x");
    			add_location(span, file, 28, 6, 487);
    			attr_dev(div0, "class", "logo svelte-1h1c67x");
    			add_location(div0, file, 26, 4, 395);
    			attr_dev(a0, "class", "link svelte-1h1c67x");
    			attr_dev(a0, "href", "https://vikbert.github.io/pixss");
    			add_location(a0, file, 31, 6, 545);
    			attr_dev(path, "fill-rule", "evenodd");
    			attr_dev(path, "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z");
    			add_location(path, file, 40, 10, 905);
    			attr_dev(svg, "height", "30");
    			attr_dev(svg, "width", "30");
    			attr_dev(svg, "viewBox", "0 0 16 16");
    			attr_dev(svg, "version", "1.1");
    			attr_dev(svg, "aria-hidden", "true");
    			attr_dev(svg, "class", "octicon octicon-mark-github v-align-middle");
    			add_location(svg, file, 33, 8, 702);
    			attr_dev(a1, "class", "github svelte-1h1c67x");
    			attr_dev(a1, "href", "https://github.com/vikbert/pixss");
    			attr_dev(a1, "target", "_blank");
    			add_location(a1, file, 32, 6, 619);
    			attr_dev(div1, "class", "nav svelte-1h1c67x");
    			add_location(div1, file, 30, 4, 521);
    			attr_dev(div2, "class", "container space-between");
    			add_location(div2, file, 25, 2, 353);
    			attr_dev(nav, "class", "topbar");
    			add_location(nav, file, 24, 0, 330);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, nav, anchor);
    			append_dev(nav, div2);
    			append_dev(div2, div0);
    			append_dev(div0, img);
    			append_dev(div0, t0);
    			append_dev(div0, span);
    			append_dev(div2, t2);
    			append_dev(div2, div1);
    			append_dev(div1, a0);
    			append_dev(div1, t4);
    			append_dev(div1, a1);
    			append_dev(a1, svg);
    			append_dev(svg, path);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(nav);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Topbar", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Topbar> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Topbar extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Topbar",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    /* src/components/global/Footer.svelte generated by Svelte v3.29.6 */

    const file$1 = "src/components/global/Footer.svelte";

    function create_fragment$1(ctx) {
    	let footer;
    	let div;

    	const block = {
    		c: function create() {
    			footer = element("footer");
    			div = element("div");
    			div.textContent = "Pixss ♥️ Berlin © 2020";
    			attr_dev(div, "class", "");
    			add_location(div, file$1, 1, 2, 38);
    			attr_dev(footer, "class", "footer centered-xy");
    			add_location(footer, file$1, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, footer, anchor);
    			append_dev(footer, div);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(footer);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Footer", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Footer> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Footer extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Footer",
    			options,
    			id: create_fragment$1.name
    		});
    	}
    }

    /* src/components/shared/Note.svelte generated by Svelte v3.29.6 */

    const file$2 = "src/components/shared/Note.svelte";

    function create_fragment$2(ctx) {
    	let div;
    	let img;
    	let img_src_value;
    	let t;
    	let span;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[1].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			img = element("img");
    			t = space();
    			span = element("span");
    			if (default_slot) default_slot.c();
    			if (img.src !== (img_src_value = "./static/hint.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			attr_dev(img, "class", "svelte-1hur5t");
    			add_location(img, file$2, 19, 2, 268);
    			attr_dev(span, "class", "svelte-1hur5t");
    			add_location(span, file$2, 20, 2, 309);
    			attr_dev(div, "class", "root svelte-1hur5t");
    			add_location(div, file$2, 18, 0, 247);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img);
    			append_dev(div, t);
    			append_dev(div, span);

    			if (default_slot) {
    				default_slot.m(span, null);
    			}

    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 1) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Note", slots, ['default']);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Note> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
    	};

    	return [$$scope, slots];
    }

    class Note extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Note",
    			options,
    			id: create_fragment$2.name
    		});
    	}
    }

    /* src/components/shared/HeroShowcase.svelte generated by Svelte v3.29.6 */

    const file$3 = "src/components/shared/HeroShowcase.svelte";

    function create_fragment$3(ctx) {
    	let div4;
    	let div3;
    	let div2;
    	let div0;
    	let t;
    	let div1;
    	let img;
    	let img_src_value;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[3].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

    	const block = {
    		c: function create() {
    			div4 = element("div");
    			div3 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			if (default_slot) default_slot.c();
    			t = space();
    			div1 = element("div");
    			img = element("img");
    			attr_dev(div0, "class", "column description");
    			add_location(div0, file$3, 21, 6, 344);
    			attr_dev(img, "class", "hide-mobile");
    			attr_dev(img, "width", /*prictureWdith*/ ctx[1]);
    			if (img.src !== (img_src_value = /*pictureUrl*/ ctx[0])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			add_location(img, file$3, 25, 8, 450);
    			attr_dev(div1, "class", "column picture svelte-15aqjkz");
    			add_location(div1, file$3, 24, 6, 413);
    			attr_dev(div2, "class", "row");
    			add_location(div2, file$3, 20, 4, 320);
    			attr_dev(div3, "class", "container");
    			add_location(div3, file$3, 19, 2, 292);
    			attr_dev(div4, "class", "hero is-primary");
    			add_location(div4, file$3, 18, 0, 260);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div4, anchor);
    			append_dev(div4, div3);
    			append_dev(div3, div2);
    			append_dev(div2, div0);

    			if (default_slot) {
    				default_slot.m(div0, null);
    			}

    			append_dev(div2, t);
    			append_dev(div2, div1);
    			append_dev(div1, img);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && dirty & /*$$scope*/ 4) {
    					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
    				}
    			}

    			if (!current || dirty & /*prictureWdith*/ 2) {
    				attr_dev(img, "width", /*prictureWdith*/ ctx[1]);
    			}

    			if (!current || dirty & /*pictureUrl*/ 1 && img.src !== (img_src_value = /*pictureUrl*/ ctx[0])) {
    				attr_dev(img, "src", img_src_value);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div4);
    			if (default_slot) default_slot.d(detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HeroShowcase", slots, ['default']);
    	let { pictureUrl = "./static/layout.svg" } = $$props;
    	let { prictureWdith = "370" } = $$props;
    	const writable_props = ["pictureUrl", "prictureWdith"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HeroShowcase> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ("pictureUrl" in $$props) $$invalidate(0, pictureUrl = $$props.pictureUrl);
    		if ("prictureWdith" in $$props) $$invalidate(1, prictureWdith = $$props.prictureWdith);
    		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({ pictureUrl, prictureWdith });

    	$$self.$inject_state = $$props => {
    		if ("pictureUrl" in $$props) $$invalidate(0, pictureUrl = $$props.pictureUrl);
    		if ("prictureWdith" in $$props) $$invalidate(1, prictureWdith = $$props.prictureWdith);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [pictureUrl, prictureWdith, $$scope, slots];
    }

    class HeroShowcase extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, { pictureUrl: 0, prictureWdith: 1 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HeroShowcase",
    			options,
    			id: create_fragment$3.name
    		});
    	}

    	get pictureUrl() {
    		throw new Error("<HeroShowcase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set pictureUrl(value) {
    		throw new Error("<HeroShowcase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get prictureWdith() {
    		throw new Error("<HeroShowcase>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set prictureWdith(value) {
    		throw new Error("<HeroShowcase>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/components/pages/home/HeroHome.svelte generated by Svelte v3.29.6 */
    const file$4 = "src/components/pages/home/HeroHome.svelte";

    // (30:0) <HeroShowcase pictureUrl="./static/rocket.svg">
    function create_default_slot(ctx) {
    	let div1;
    	let img;
    	let img_src_value;
    	let t0;
    	let h3;
    	let t2;
    	let h4;
    	let t4;
    	let div0;
    	let a;
    	let button0;
    	let t6;
    	let button1;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			div1 = element("div");
    			img = element("img");
    			t0 = space();
    			h3 = element("h3");
    			h3.textContent = "A pragmatic CSS for Minimalist";
    			t2 = space();
    			h4 = element("h4");
    			h4.textContent = "Small but good enough";
    			t4 = space();
    			div0 = element("div");
    			a = element("a");
    			button0 = element("button");
    			button0.textContent = "Download only ~5kb";
    			t6 = space();
    			button1 = element("button");
    			button1.textContent = "Copy CSS link";
    			attr_dev(img, "class", "logo svelte-jdni8m");
    			if (img.src !== (img_src_value = "./static/app.png")) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", "");
    			add_location(img, file$4, 31, 4, 738);
    			attr_dev(h3, "class", "bold opacity-75");
    			add_location(h3, file$4, 32, 4, 793);
    			attr_dev(h4, "class", "bold opacity-50");
    			add_location(h4, file$4, 33, 4, 861);
    			attr_dev(button0, "class", "is-rounded is-outlined");
    			add_location(button0, file$4, 36, 8, 967);
    			attr_dev(a, "href", /*cssUrl*/ ctx[0]);
    			attr_dev(a, "download", "");
    			add_location(a, file$4, 35, 6, 932);
    			attr_dev(button1, "class", "is-rounded is-outlined");
    			add_location(button1, file$4, 37, 6, 1044);
    			add_location(div0, file$4, 34, 4, 920);
    			attr_dev(div1, "class", "description svelte-jdni8m");
    			add_location(div1, file$4, 30, 2, 708);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div1, anchor);
    			append_dev(div1, img);
    			append_dev(div1, t0);
    			append_dev(div1, h3);
    			append_dev(div1, t2);
    			append_dev(div1, h4);
    			append_dev(div1, t4);
    			append_dev(div1, div0);
    			append_dev(div0, a);
    			append_dev(a, button0);
    			append_dev(div0, t6);
    			append_dev(div0, button1);

    			if (!mounted) {
    				dispose = listen_dev(button1, "click", /*click_handler*/ ctx[1], false, false, false);
    				mounted = true;
    			}
    		},
    		p: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div1);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(30:0) <HeroShowcase pictureUrl=\\\"./static/rocket.svg\\\">",
    		ctx
    	});

    	return block;
    }

    function create_fragment$4(ctx) {
    	let heroshowcase;
    	let current;

    	heroshowcase = new HeroShowcase({
    			props: {
    				pictureUrl: "./static/rocket.svg",
    				$$slots: { default: [create_default_slot] },
    				$$scope: { ctx }
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(heroshowcase.$$.fragment);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(heroshowcase, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			const heroshowcase_changes = {};

    			if (dirty & /*$$scope*/ 8) {
    				heroshowcase_changes.$$scope = { dirty, ctx };
    			}

    			heroshowcase.$set(heroshowcase_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(heroshowcase.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(heroshowcase.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(heroshowcase, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function copyToClipboard(text) {
    	const elem = document.createElement("textarea");
    	elem.value = text;
    	document.body.appendChild(elem);
    	elem.select();
    	document.execCommand("copy");
    	document.body.removeChild(elem);
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("HeroHome", slots, []);
    	const hostUrl = location.origin;

    	const cssUrl = hostUrl.includes("localhost")
    	? hostUrl + "/styles/pixss.min.css"
    	: hostUrl + "/pixss/demo/styles/pixss.min.css";

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HeroHome> was created with unknown prop '${key}'`);
    	});

    	const click_handler = () => copyToClipboard(cssUrl);

    	$$self.$capture_state = () => ({
    		HeroShowcase,
    		hostUrl,
    		cssUrl,
    		copyToClipboard
    	});

    	return [cssUrl, click_handler];
    }

    class HeroHome extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HeroHome",
    			options,
    			id: create_fragment$4.name
    		});
    	}
    }

    /* src/components/pages/home/Showcase.svelte generated by Svelte v3.29.6 */

    const file$5 = "src/components/pages/home/Showcase.svelte";

    function create_fragment$5(ctx) {
    	let div17;
    	let div9;
    	let div2;
    	let div0;
    	let span0;
    	let t0;
    	let div1;
    	let h30;
    	let t2;
    	let p0;
    	let t3;
    	let code0;
    	let t5;
    	let code1;
    	let t7;
    	let code2;
    	let t9;
    	let code3;
    	let t11;
    	let code4;
    	let t13;
    	let code5;
    	let t15;
    	let div5;
    	let div3;
    	let span1;
    	let t16;
    	let div4;
    	let h31;
    	let t18;
    	let p1;
    	let t19;
    	let code6;
    	let t21;
    	let code7;
    	let t23;
    	let code8;
    	let t25;
    	let div8;
    	let div6;
    	let span2;
    	let t26;
    	let div7;
    	let h32;
    	let t28;
    	let p2;
    	let t29;
    	let code9;
    	let t31;
    	let code10;
    	let t33;
    	let code11;
    	let t35;
    	let code12;
    	let t37;
    	let code13;
    	let t39;
    	let code14;
    	let t41;
    	let div16;
    	let div12;
    	let div10;
    	let span3;
    	let t42;
    	let div11;
    	let h33;
    	let t44;
    	let p3;
    	let t45;
    	let code15;
    	let t47;
    	let code16;
    	let t49;
    	let code17;
    	let t51;
    	let div15;
    	let div13;
    	let span4;
    	let t52;
    	let div14;
    	let h34;
    	let t54;
    	let p4;
    	let t55;
    	let code18;
    	let t57;
    	let code19;
    	let t59;
    	let code20;
    	let t61;
    	let code21;
    	let t63;
    	let code22;
    	let t65;
    	let code23;
    	let t67;
    	let code24;
    	let t69;
    	let code25;
    	let t71;
    	let code26;
    	let t73;
    	let code27;
    	let t75;
    	let code28;

    	const block = {
    		c: function create() {
    			div17 = element("div");
    			div9 = element("div");
    			div2 = element("div");
    			div0 = element("div");
    			span0 = element("span");
    			t0 = space();
    			div1 = element("div");
    			h30 = element("h3");
    			h30.textContent = "Layout";
    			t2 = space();
    			p0 = element("p");
    			t3 = text("Design the structure of the webpage with these CSS classes\n          ");
    			code0 = element("code");
    			code0.textContent = ".topbar";
    			t5 = space();
    			code1 = element("code");
    			code1.textContent = ".sidebar";
    			t7 = space();
    			code2 = element("code");
    			code2.textContent = ".main";
    			t9 = space();
    			code3 = element("code");
    			code3.textContent = ".footer";
    			t11 = space();
    			code4 = element("code");
    			code4.textContent = ".container";
    			t13 = space();
    			code5 = element("code");
    			code5.textContent = ".hero";
    			t15 = space();
    			div5 = element("div");
    			div3 = element("div");
    			span1 = element("span");
    			t16 = space();
    			div4 = element("div");
    			h31 = element("h3");
    			h31.textContent = "Navigation";
    			t18 = space();
    			p1 = element("p");
    			t19 = text("Navigate the page content or links with classes like:\n          ");
    			code6 = element("code");
    			code6.textContent = ".topbar";
    			t21 = space();
    			code7 = element("code");
    			code7.textContent = ".sidebar";
    			t23 = space();
    			code8 = element("code");
    			code8.textContent = ".tabs";
    			t25 = space();
    			div8 = element("div");
    			div6 = element("div");
    			span2 = element("span");
    			t26 = space();
    			div7 = element("div");
    			h32 = element("h3");
    			h32.textContent = "Form";
    			t28 = space();
    			p2 = element("p");
    			t29 = text("Essential form controls for minimal and pragmatical use:\n          ");
    			code9 = element("code");
    			code9.textContent = "button";
    			t31 = space();
    			code10 = element("code");
    			code10.textContent = "input";
    			t33 = space();
    			code11 = element("code");
    			code11.textContent = "textfield";
    			t35 = space();
    			code12 = element("code");
    			code12.textContent = "checkbox";
    			t37 = space();
    			code13 = element("code");
    			code13.textContent = "radio";
    			t39 = space();
    			code14 = element("code");
    			code14.textContent = "select";
    			t41 = space();
    			div16 = element("div");
    			div12 = element("div");
    			div10 = element("div");
    			span3 = element("span");
    			t42 = space();
    			div11 = element("div");
    			h33 = element("h3");
    			h33.textContent = "Widget";
    			t44 = space();
    			p3 = element("p");
    			t45 = text("Common used UX elements that only require a single CSS class, such as\n          ");
    			code15 = element("code");
    			code15.textContent = ".card";
    			t47 = space();
    			code16 = element("code");
    			code16.textContent = ".popup";
    			t49 = space();
    			code17 = element("code");
    			code17.textContent = ".showcase";
    			t51 = space();
    			div15 = element("div");
    			div13 = element("div");
    			span4 = element("span");
    			t52 = space();
    			div14 = element("div");
    			h34 = element("h3");
    			h34.textContent = "Utils";
    			t54 = space();
    			p4 = element("p");
    			t55 = text("Focus on building complex components by use the most common used\n          utilities:\n          ");
    			code18 = element("code");
    			code18.textContent = ".is-rounded";
    			t57 = space();
    			code19 = element("code");
    			code19.textContent = ".centered-xy";
    			t59 = space();
    			code20 = element("code");
    			code20.textContent = ".float-left";
    			t61 = space();
    			code21 = element("code");
    			code21.textContent = ".float-right";
    			t63 = space();
    			code22 = element("code");
    			code22.textContent = ".mx-*";
    			t65 = space();
    			code23 = element("code");
    			code23.textContent = ".my-*";
    			t67 = space();
    			code24 = element("code");
    			code24.textContent = ".px-*";
    			t69 = space();
    			code25 = element("code");
    			code25.textContent = ".py-*";
    			t71 = space();
    			code26 = element("code");
    			code26.textContent = ".is-rounded";
    			t73 = space();
    			code27 = element("code");
    			code27.textContent = ".icon-close";
    			t75 = space();
    			code28 = element("code");
    			code28.textContent = ".hamburger";
    			attr_dev(span0, "class", "icon icon-library");
    			add_location(span0, file$5, 3, 33, 101);
    			attr_dev(div0, "class", "showcase-icon");
    			add_location(div0, file$5, 3, 6, 74);
    			attr_dev(h30, "class", "my-0");
    			add_location(h30, file$5, 5, 8, 187);
    			add_location(code0, file$5, 8, 10, 307);
    			add_location(code1, file$5, 9, 10, 338);
    			add_location(code2, file$5, 10, 10, 370);
    			add_location(code3, file$5, 11, 10, 399);
    			add_location(code4, file$5, 12, 10, 430);
    			add_location(code5, file$5, 13, 10, 464);
    			add_location(p0, file$5, 6, 8, 224);
    			attr_dev(div1, "class", "showcase-content");
    			add_location(div1, file$5, 4, 6, 148);
    			attr_dev(div2, "class", "showcase");
    			add_location(div2, file$5, 2, 4, 45);
    			attr_dev(span1, "class", "icon icon-tree");
    			add_location(span1, file$5, 19, 33, 581);
    			attr_dev(div3, "class", "showcase-icon");
    			add_location(div3, file$5, 19, 6, 554);
    			attr_dev(h31, "class", "my-0");
    			add_location(h31, file$5, 21, 8, 664);
    			add_location(code6, file$5, 24, 10, 783);
    			add_location(code7, file$5, 25, 10, 816);
    			add_location(code8, file$5, 26, 10, 848);
    			add_location(p1, file$5, 22, 8, 705);
    			attr_dev(div4, "class", "showcase-content");
    			add_location(div4, file$5, 20, 6, 625);
    			attr_dev(div5, "class", "showcase");
    			add_location(div5, file$5, 18, 4, 525);
    			attr_dev(span2, "class", "icon icon-insert-template");
    			add_location(span2, file$5, 33, 8, 974);
    			attr_dev(div6, "class", "showcase-icon");
    			add_location(div6, file$5, 32, 6, 938);
    			attr_dev(h32, "class", "my-0");
    			add_location(h32, file$5, 36, 8, 1075);
    			add_location(code9, file$5, 39, 10, 1191);
    			add_location(code10, file$5, 40, 10, 1223);
    			add_location(code11, file$5, 41, 10, 1254);
    			add_location(code12, file$5, 42, 10, 1289);
    			add_location(code13, file$5, 43, 10, 1323);
    			add_location(code14, file$5, 44, 10, 1354);
    			add_location(p2, file$5, 37, 8, 1110);
    			attr_dev(div7, "class", "showcase-content");
    			add_location(div7, file$5, 35, 6, 1036);
    			attr_dev(div8, "class", "showcase");
    			add_location(div8, file$5, 31, 4, 909);
    			attr_dev(div9, "class", "column");
    			add_location(div9, file$5, 1, 2, 20);
    			attr_dev(span3, "class", "icon icon-stack");
    			add_location(span3, file$5, 51, 33, 1505);
    			attr_dev(div10, "class", "showcase-icon");
    			add_location(div10, file$5, 51, 6, 1478);
    			attr_dev(h33, "class", "my-0");
    			add_location(h33, file$5, 53, 8, 1589);
    			add_location(code15, file$5, 56, 10, 1720);
    			add_location(code16, file$5, 57, 10, 1749);
    			add_location(code17, file$5, 58, 10, 1779);
    			add_location(p3, file$5, 54, 8, 1626);
    			attr_dev(div11, "class", "showcase-content");
    			add_location(div11, file$5, 52, 6, 1550);
    			attr_dev(div12, "class", "showcase");
    			add_location(div12, file$5, 50, 4, 1449);
    			attr_dev(span4, "class", "icon icon-aid-kit");
    			add_location(span4, file$5, 64, 33, 1900);
    			attr_dev(div13, "class", "showcase-icon");
    			add_location(div13, file$5, 64, 6, 1873);
    			attr_dev(h34, "class", "my-0");
    			add_location(h34, file$5, 66, 8, 1986);
    			add_location(code18, file$5, 70, 10, 2132);
    			add_location(code19, file$5, 71, 10, 2167);
    			add_location(code20, file$5, 72, 10, 2203);
    			add_location(code21, file$5, 73, 10, 2238);
    			add_location(code22, file$5, 74, 10, 2274);
    			add_location(code23, file$5, 75, 10, 2303);
    			add_location(code24, file$5, 76, 10, 2332);
    			add_location(code25, file$5, 77, 10, 2361);
    			add_location(code26, file$5, 78, 10, 2390);
    			add_location(code27, file$5, 79, 10, 2425);
    			add_location(code28, file$5, 80, 10, 2460);
    			add_location(p4, file$5, 67, 8, 2022);
    			attr_dev(div14, "class", "showcase-content");
    			add_location(div14, file$5, 65, 6, 1947);
    			attr_dev(div15, "class", "showcase");
    			add_location(div15, file$5, 63, 4, 1844);
    			attr_dev(div16, "class", "column");
    			add_location(div16, file$5, 49, 2, 1424);
    			attr_dev(div17, "class", "row");
    			add_location(div17, file$5, 0, 0, 0);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div17, anchor);
    			append_dev(div17, div9);
    			append_dev(div9, div2);
    			append_dev(div2, div0);
    			append_dev(div0, span0);
    			append_dev(div2, t0);
    			append_dev(div2, div1);
    			append_dev(div1, h30);
    			append_dev(div1, t2);
    			append_dev(div1, p0);
    			append_dev(p0, t3);
    			append_dev(p0, code0);
    			append_dev(p0, t5);
    			append_dev(p0, code1);
    			append_dev(p0, t7);
    			append_dev(p0, code2);
    			append_dev(p0, t9);
    			append_dev(p0, code3);
    			append_dev(p0, t11);
    			append_dev(p0, code4);
    			append_dev(p0, t13);
    			append_dev(p0, code5);
    			append_dev(div9, t15);
    			append_dev(div9, div5);
    			append_dev(div5, div3);
    			append_dev(div3, span1);
    			append_dev(div5, t16);
    			append_dev(div5, div4);
    			append_dev(div4, h31);
    			append_dev(div4, t18);
    			append_dev(div4, p1);
    			append_dev(p1, t19);
    			append_dev(p1, code6);
    			append_dev(p1, t21);
    			append_dev(p1, code7);
    			append_dev(p1, t23);
    			append_dev(p1, code8);
    			append_dev(div9, t25);
    			append_dev(div9, div8);
    			append_dev(div8, div6);
    			append_dev(div6, span2);
    			append_dev(div8, t26);
    			append_dev(div8, div7);
    			append_dev(div7, h32);
    			append_dev(div7, t28);
    			append_dev(div7, p2);
    			append_dev(p2, t29);
    			append_dev(p2, code9);
    			append_dev(p2, t31);
    			append_dev(p2, code10);
    			append_dev(p2, t33);
    			append_dev(p2, code11);
    			append_dev(p2, t35);
    			append_dev(p2, code12);
    			append_dev(p2, t37);
    			append_dev(p2, code13);
    			append_dev(p2, t39);
    			append_dev(p2, code14);
    			append_dev(div17, t41);
    			append_dev(div17, div16);
    			append_dev(div16, div12);
    			append_dev(div12, div10);
    			append_dev(div10, span3);
    			append_dev(div12, t42);
    			append_dev(div12, div11);
    			append_dev(div11, h33);
    			append_dev(div11, t44);
    			append_dev(div11, p3);
    			append_dev(p3, t45);
    			append_dev(p3, code15);
    			append_dev(p3, t47);
    			append_dev(p3, code16);
    			append_dev(p3, t49);
    			append_dev(p3, code17);
    			append_dev(div16, t51);
    			append_dev(div16, div15);
    			append_dev(div15, div13);
    			append_dev(div13, span4);
    			append_dev(div15, t52);
    			append_dev(div15, div14);
    			append_dev(div14, h34);
    			append_dev(div14, t54);
    			append_dev(div14, p4);
    			append_dev(p4, t55);
    			append_dev(p4, code18);
    			append_dev(p4, t57);
    			append_dev(p4, code19);
    			append_dev(p4, t59);
    			append_dev(p4, code20);
    			append_dev(p4, t61);
    			append_dev(p4, code21);
    			append_dev(p4, t63);
    			append_dev(p4, code22);
    			append_dev(p4, t65);
    			append_dev(p4, code23);
    			append_dev(p4, t67);
    			append_dev(p4, code24);
    			append_dev(p4, t69);
    			append_dev(p4, code25);
    			append_dev(p4, t71);
    			append_dev(p4, code26);
    			append_dev(p4, t73);
    			append_dev(p4, code27);
    			append_dev(p4, t75);
    			append_dev(p4, code28);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div17);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("Showcase", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Showcase> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Showcase extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Showcase",
    			options,
    			id: create_fragment$5.name
    		});
    	}
    }

    /* src/components/pages/home/PageHome.svelte generated by Svelte v3.29.6 */
    const file$6 = "src/components/pages/home/PageHome.svelte";

    function create_fragment$6(ctx) {
    	let herohome;
    	let t;
    	let section;
    	let showcase;
    	let current;
    	herohome = new HeroHome({ $$inline: true });
    	showcase = new Showcase({ $$inline: true });

    	const block = {
    		c: function create() {
    			create_component(herohome.$$.fragment);
    			t = space();
    			section = element("section");
    			create_component(showcase.$$.fragment);
    			attr_dev(section, "class", "container py-2");
    			add_location(section, file$6, 8, 0, 169);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			mount_component(herohome, target, anchor);
    			insert_dev(target, t, anchor);
    			insert_dev(target, section, anchor);
    			mount_component(showcase, section, null);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(herohome.$$.fragment, local);
    			transition_in(showcase.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(herohome.$$.fragment, local);
    			transition_out(showcase.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(herohome, detaching);
    			if (detaching) detach_dev(t);
    			if (detaching) detach_dev(section);
    			destroy_component(showcase);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("PageHome", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PageHome> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Note, HeroHome, Showcase });
    	return [];
    }

    class PageHome extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "PageHome",
    			options,
    			id: create_fragment$6.name
    		});
    	}
    }

    /* src/components/App.svelte generated by Svelte v3.29.6 */
    const file$7 = "src/components/App.svelte";

    function create_fragment$7(ctx) {
    	let header;
    	let topbar;
    	let t0;
    	let main;
    	let pagehome;
    	let t1;
    	let footer;
    	let current;
    	topbar = new Topbar({ $$inline: true });
    	pagehome = new PageHome({ $$inline: true });
    	footer = new Footer({ $$inline: true });

    	const block = {
    		c: function create() {
    			header = element("header");
    			create_component(topbar.$$.fragment);
    			t0 = space();
    			main = element("main");
    			create_component(pagehome.$$.fragment);
    			t1 = space();
    			create_component(footer.$$.fragment);
    			add_location(header, file$7, 6, 0, 169);
    			attr_dev(main, "class", "main");
    			add_location(main, file$7, 10, 0, 202);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, header, anchor);
    			mount_component(topbar, header, null);
    			insert_dev(target, t0, anchor);
    			insert_dev(target, main, anchor);
    			mount_component(pagehome, main, null);
    			insert_dev(target, t1, anchor);
    			mount_component(footer, target, anchor);
    			current = true;
    		},
    		p: noop,
    		i: function intro(local) {
    			if (current) return;
    			transition_in(topbar.$$.fragment, local);
    			transition_in(pagehome.$$.fragment, local);
    			transition_in(footer.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(topbar.$$.fragment, local);
    			transition_out(pagehome.$$.fragment, local);
    			transition_out(footer.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(header);
    			destroy_component(topbar);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(main);
    			destroy_component(pagehome);
    			if (detaching) detach_dev(t1);
    			destroy_component(footer, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$7.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("App", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	$$self.$capture_state = () => ({ Topbar, Footer, PageHome });
    	return [];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment$7.name
    		});
    	}
    }

    const app = new App({
      target: document.body,
    });

    return app;

}());
//# sourceMappingURL=bundle.js.map

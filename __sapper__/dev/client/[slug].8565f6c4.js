import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as addToCart, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, I as listen_dev, J as set_data_dev, n as noop } from './client.a78e4bae.js';
import { u as url } from './URL.a6a1c5b8.js';

/* src/routes/products/[slug].svelte generated by Svelte v3.19.0 */
const file = "src/routes/products/[slug].svelte";

function create_fragment(ctx) {
	let title_value;
	let t0;
	let div6;
	let div0;
	let img;
	let img_src_value;
	let t1;
	let div5;
	let h1;
	let t2_value = /*product*/ ctx[0].title + "";
	let t2;
	let t3;
	let div4;
	let div1;
	let t4_value = /*product*/ ctx[0].price + "";
	let t4;
	let t5;
	let div2;
	let t6_value = /*product*/ ctx[0].description + "";
	let t6;
	let t7;
	let div3;
	let button;
	let t8;
	let dispose;

	document.title = title_value = !/*product*/ ctx[0]
	? "Product"
	: /*product*/ ctx[0].title;

	const block = {
		c: function create() {
			t0 = space();
			div6 = element("div");
			div0 = element("div");
			img = element("img");
			t1 = space();
			div5 = element("div");
			h1 = element("h1");
			t2 = text(t2_value);
			t3 = space();
			div4 = element("div");
			div1 = element("div");
			t4 = text(t4_value);
			t5 = space();
			div2 = element("div");
			t6 = text(t6_value);
			t7 = space();
			div3 = element("div");
			button = element("button");
			t8 = text("Add to Cart");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-jty4r6\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div6 = claim_element(nodes, "DIV", { class: true });
			var div6_nodes = children(div6);
			div0 = claim_element(div6_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true });
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div6_nodes);
			div5 = claim_element(div6_nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			h1 = claim_element(div5_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, t2_value);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			t4 = claim_text(div1_nodes, t4_value);
			div1_nodes.forEach(detach_dev);
			t5 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			t6 = claim_text(div2_nodes, t6_value);
			div2_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			button = claim_element(div3_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t8 = claim_text(button_nodes, "Add to Cart");
			button_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			div6_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = `${url}${/*product*/ ctx[0].image[0].url}`)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", "product image");
			add_location(img, file, 51, 4, 1405);
			attr_dev(div0, "class", "product-images");
			add_location(div0, file, 50, 2, 1372);
			add_location(h1, file, 55, 4, 1517);
			add_location(div1, file, 58, 6, 1575);
			add_location(div2, file, 59, 6, 1608);
			attr_dev(button, "class", "svelte-wb37b5");
			add_location(button, file, 61, 8, 1680);
			attr_dev(div3, "class", "atc-button svelte-wb37b5");
			add_location(div3, file, 60, 6, 1647);
			attr_dev(div4, "class", "content");
			add_location(div4, file, 57, 4, 1547);
			attr_dev(div5, "class", "product-details svelte-wb37b5");
			add_location(div5, file, 54, 2, 1483);
			attr_dev(div6, "class", "product svelte-wb37b5");
			add_location(div6, file, 49, 0, 1348);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div6, anchor);
			append_dev(div6, div0);
			append_dev(div0, img);
			append_dev(div6, t1);
			append_dev(div6, div5);
			append_dev(div5, h1);
			append_dev(h1, t2);
			append_dev(div5, t3);
			append_dev(div5, div4);
			append_dev(div4, div1);
			append_dev(div1, t4);
			append_dev(div4, t5);
			append_dev(div4, div2);
			append_dev(div2, t6);
			append_dev(div4, t7);
			append_dev(div4, div3);
			append_dev(div3, button);
			append_dev(button, t8);
			dispose = listen_dev(button, "click", /*click_handler*/ ctx[1], false, false, false);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*product*/ 1 && title_value !== (title_value = !/*product*/ ctx[0]
			? "Product"
			: /*product*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (dirty & /*product*/ 1 && img.src !== (img_src_value = `${url}${/*product*/ ctx[0].image[0].url}`)) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*product*/ 1 && t2_value !== (t2_value = /*product*/ ctx[0].title + "")) set_data_dev(t2, t2_value);
			if (dirty & /*product*/ 1 && t4_value !== (t4_value = /*product*/ ctx[0].price + "")) set_data_dev(t4, t4_value);
			if (dirty & /*product*/ 1 && t6_value !== (t6_value = /*product*/ ctx[0].description + "")) set_data_dev(t6, t6_value);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div6);
			dispose();
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

async function preload({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`products/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { product: data };
	} else {
		this.error(res.status, data.message);
	}
}

function instance($$self, $$props, $$invalidate) {
	let { product } = $$props;
	const writable_props = ["product"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bslugu5D> was created with unknown prop '${key}'`);
	});

	const click_handler = () => {
		addToCart(parseInt(product.id), product);
	};

	$$self.$set = $$props => {
		if ("product" in $$props) $$invalidate(0, product = $$props.product);
	};

	$$self.$capture_state = () => ({ preload, product, addToCart, url });

	$$self.$inject_state = $$props => {
		if ("product" in $$props) $$invalidate(0, product = $$props.product);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [product, click_handler];
}

class U5Bslugu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { product: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bslugu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*product*/ ctx[0] === undefined && !("product" in props)) {
			console.warn("<U5Bslugu5D> was created without expected prop 'product'");
		}
	}

	get product() {
		throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set product(value) {
		throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bslugu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjg1NjVmNmM0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Byb2R1Y3RzL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHsgcGFyYW1zLCBxdWVyeSB9KSB7XG4gICAgLy8gdGhlIGBzbHVnYCBwYXJhbWV0ZXIgaXMgYXZhaWxhYmxlIGJlY2F1c2VcbiAgICAvLyB0aGlzIGZpbGUgaXMgY2FsbGVkIFtzbHVnXS5zdmVsdGVcbiAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmZldGNoKGBwcm9kdWN0cy8ke3BhcmFtcy5zbHVnfS5qc29uYCk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4geyBwcm9kdWN0OiBkYXRhIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBleHBvcnQgbGV0IHByb2R1Y3Q7XG4gIGltcG9ydCB7IGFkZFRvQ2FydCB9IGZyb20gXCIuLi8uLi9zdG9yZXMvY2FydC5qc1wiO1xuICBpbXBvcnQgdXJsIGZyb20gXCIuLi8uLi9zdHJhcGkvVVJMLmpzXCI7XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIC5wcm9kdWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWRldGFpbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICAuYXRjLWJ1dHRvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+eyFwcm9kdWN0ID8gJ1Byb2R1Y3QnIDogcHJvZHVjdC50aXRsZX08L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGRpdiBjbGFzcz1cInByb2R1Y3RcIj5cbiAgPGRpdiBjbGFzcz1cInByb2R1Y3QtaW1hZ2VzXCI+XG4gICAgPGltZyBzcmM9e2Ake3VybH0ke3Byb2R1Y3QuaW1hZ2VbMF0udXJsfWB9IGFsdD1cInByb2R1Y3QgaW1hZ2VcIiAvPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXRhaWxzXCI+XG4gICAgPGgxPntwcm9kdWN0LnRpdGxlfTwvaDE+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPGRpdj57cHJvZHVjdC5wcmljZX08L2Rpdj5cbiAgICAgIDxkaXY+e3Byb2R1Y3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYXRjLWJ1dHRvblwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgb246Y2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIGFkZFRvQ2FydChwYXJzZUludChwcm9kdWN0LmlkKSwgcHJvZHVjdCk7XG4gICAgICAgICAgfX0+XG4gICAgICAgICAgQWRkIHRvIENhcnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OzRCQXVEUyxHQUFPLElBQUMsS0FBSzs7Ozs7NEJBR1YsR0FBTyxJQUFDLEtBQUs7Ozs7NEJBQ2IsR0FBTyxJQUFDLFdBQVc7Ozs7Ozs7OzZDQWJwQixHQUFPO0dBQUcsU0FBUztlQUFHLEdBQU8sSUFBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FLN0IsR0FBRyxlQUFHLEdBQU8sSUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RUFMaEMsR0FBTztLQUFHLFNBQVM7aUJBQUcsR0FBTyxJQUFDLEtBQUs7Ozs7Z0VBSzdCLEdBQUcsZUFBRyxHQUFPLElBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHOzs7O3FFQUlsQyxHQUFPLElBQUMsS0FBSztxRUFHVixHQUFPLElBQUMsS0FBSztxRUFDYixHQUFPLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQTFEUCxPQUFPLEdBQUcsTUFBTSxFQUFFLEtBQUs7OztPQUdyQyxHQUFHLFNBQVMsSUFBSSxDQUFDLEtBQUssYUFBYSxNQUFNLENBQUMsSUFBSTs7T0FDOUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJOztLQUV2QixHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUc7V0FDWCxPQUFPLEVBQUUsSUFBSTs7RUFFdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPOzs7OztPQVQ1QixPQUFPOzs7Ozs7OztFQThEUixTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==

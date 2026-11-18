import { useMemo, useState } from "react";
import { ArrowLeft, Pencil, Plus, Search, Shield, Trash2, X } from "lucide-react";
import { imageAssets } from "../assets/imageAssets";

const emptyForm = { name: "", category: "Jewellery", price: "", originalPrice: "", image: imageAssets[0]?.src || "", description: "" };
const categories = ["Jewellery", "Self Care", "Thoughtful Gifts", "For Every Moment"];

const AdminPanel = ({ products, onSaveProduct, onRemoveProduct, onBackToStore }) => {
  const [query, setQuery] = useState("");
  const [form, setForm] = useState(null);
  const [notice, setNotice] = useState("");
  const visibleProducts = useMemo(() => products.filter((product) => `${product.name} ${product.category}`.toLowerCase().includes(query.toLowerCase())), [products, query]);

  const editProduct = (product) => {
    setNotice("");
    setForm({ ...product, price: String(product.price), originalPrice: product.originalPrice ? String(product.originalPrice) : "", description: product.description || "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitProduct = (event) => {
    event.preventDefault();
    onSaveProduct({ ...form, price: Number(form.price), originalPrice: form.originalPrice ? Number(form.originalPrice) : null });
    setNotice(form.id ? "Product details updated." : "Product added to your catalog.");
    setForm(null);
  };

  const updateForm = (key, value) => setForm((previous) => ({ ...previous, [key]: value }));

  return (
    <section className="min-h-screen bg-[#f8f4f2] px-4 py-8 text-[#35242b] sm:px-7 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <button onClick={onBackToStore} className="mb-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[.16em] text-[#8b6873] hover:text-[#a63a5f]"><ArrowLeft size={15}/> Back to store</button>
        <header className="mb-8 flex flex-wrap items-end justify-between gap-5 border-b border-[#c2547a]/20 pb-7">
          <div><p className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.25em] text-[#a63a5f]"><Shield size={14}/> Store management</p><h1 className="font-serif text-4xl sm:text-5xl">Admin panel</h1><p className="mt-2 text-sm text-[#846d74]">Manage the products shown across your store.</p></div>
          <div className="flex gap-3"><div className="border border-[#d8c7c8] bg-white px-4 py-3"><span className="block text-[9px] uppercase tracking-[.18em] text-[#9a6b7b]">Products</span><strong className="mt-1 block font-serif text-2xl font-normal">{products.length}</strong></div><button onClick={() => { setNotice(""); setForm({ ...emptyForm }); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="inline-flex items-center gap-2 bg-[#a63a5f] px-5 py-3 text-xs font-semibold uppercase tracking-[.13em] text-white shadow-sm transition hover:bg-[#8f2a4b]"><Plus size={16}/> Add product</button></div>
        </header>

        {notice && <p role="status" className="mb-6 border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{notice}</p>}

        {form && <form onSubmit={submitProduct} className="mb-9 border border-[#d8c7c8] bg-white p-5 shadow-[0_12px_36px_rgba(75,40,50,.06)] sm:p-7">
          <div className="mb-6 flex items-center justify-between gap-4"><div><p className="text-[9px] font-semibold uppercase tracking-[.2em] text-[#a63a5f]">Catalog editor</p><h2 className="mt-1 font-serif text-2xl">{form.id ? "Edit product" : "Add a product"}</h2></div><button type="button" onClick={() => setForm(null)} aria-label="Close product editor" className="p-2 text-[#8b6873] hover:bg-[#fff1f5]"><X size={18}/></button></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <label className="text-xs font-medium text-[#765d66]">Product name<input required value={form.name} onChange={(event) => updateForm("name", event.target.value)} className="mt-2 block w-full border border-[#ddced0] px-3 py-3 text-sm text-[#35242b] outline-none focus:border-[#a63a5f]" placeholder="e.g. Rose Gold Keepsake"/></label>
            <label className="text-xs font-medium text-[#765d66]">Category<select value={form.category} onChange={(event) => updateForm("category", event.target.value)} className="mt-2 block w-full border border-[#ddced0] bg-white px-3 py-3 text-sm text-[#35242b] outline-none focus:border-[#a63a5f]">{categories.map((category) => <option key={category}>{category}</option>)}</select></label>
            <label className="text-xs font-medium text-[#765d66]">Price (₹)<input required min="0" step="1" type="number" value={form.price} onChange={(event) => updateForm("price", event.target.value)} className="mt-2 block w-full border border-[#ddced0] px-3 py-3 text-sm text-[#35242b] outline-none focus:border-[#a63a5f]" placeholder="1299"/></label>
            <label className="text-xs font-medium text-[#765d66]">Original price (₹)<input min="0" step="1" type="number" value={form.originalPrice} onChange={(event) => updateForm("originalPrice", event.target.value)} className="mt-2 block w-full border border-[#ddced0] px-3 py-3 text-sm text-[#35242b] outline-none focus:border-[#a63a5f]" placeholder="Optional"/></label>
            <label className="text-xs font-medium text-[#765d66]">Product image<select value={form.image} onChange={(event) => updateForm("image", event.target.value)} className="mt-2 block w-full border border-[#ddced0] bg-white px-3 py-3 text-sm text-[#35242b] outline-none focus:border-[#a63a5f]">{imageAssets.map((asset) => <option key={asset.filename} value={asset.src}>{asset.name}</option>)}</select></label>
            <label className="text-xs font-medium text-[#765d66] sm:col-span-2 lg:col-span-1">Description<textarea rows="3" value={form.description} onChange={(event) => updateForm("description", event.target.value)} className="mt-2 block w-full resize-y border border-[#ddced0] px-3 py-3 text-sm text-[#35242b] outline-none focus:border-[#a63a5f]" placeholder="Tell customers what makes this gift special."/></label>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3"><button type="submit" className="bg-[#a63a5f] px-6 py-3 text-xs font-semibold uppercase tracking-[.15em] text-white hover:bg-[#8f2a4b]">{form.id ? "Save changes" : "Add product"}</button><button type="button" onClick={() => setForm(null)} className="border border-[#d8c7c8] px-6 py-3 text-xs font-medium uppercase tracking-[.15em] text-[#765d66] hover:bg-[#faf5f5]">Cancel</button></div>
        </form>}

        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-serif text-2xl">Product catalog</h2><p className="mt-1 text-xs text-[#8b747a]">Add, edit, search or remove products.</p></div><label className="flex items-center gap-2 border border-[#ddced0] bg-white px-3"><Search size={16} className="text-[#a63a5f]"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search catalog" className="w-full bg-transparent py-2.5 text-sm outline-none sm:w-64"/></label></div>
        {visibleProducts.length ? <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">{visibleProducts.map((product) => <article key={product.id} className="flex min-w-0 gap-4 border border-[#e3d6d5] bg-white p-3 shadow-[0_5px_18px_rgba(75,40,50,.04)]"><img src={product.image} alt={product.name} className="h-24 w-20 shrink-0 object-cover bg-[#f6e9e9]"/><div className="flex min-w-0 flex-1 flex-col"><p className="text-[9px] uppercase tracking-[.18em] text-[#a63a5f]">{product.category}</p><h3 className="mt-1 line-clamp-2 font-serif text-lg leading-snug">{product.name}</h3><p className="mt-1 text-xs text-[#765d66]">₹{product.price.toLocaleString("en-IN")}</p><div className="mt-auto flex gap-2 pt-3"><button onClick={() => editProduct(product)} className="inline-flex items-center gap-1.5 border border-[#ddced0] px-3 py-1.5 text-[10px] uppercase tracking-[.1em] text-[#684a55] hover:border-[#a63a5f] hover:text-[#a63a5f]"><Pencil size={12}/> Edit</button><button onClick={() => { if (window.confirm(`Remove “${product.name}” from the catalog?`)) onRemoveProduct(product.id); }} className="inline-flex items-center gap-1.5 border border-[#edd8dc] px-3 py-1.5 text-[10px] uppercase tracking-[.1em] text-[#9d4e63] hover:bg-[#fff1f4]"><Trash2 size={12}/> Remove</button></div></div></article>)}</div> : <div className="border border-[#e3d6d5] bg-white px-6 py-12 text-center text-sm text-[#8b747a]">No products match your search.</div>}
        <p className="mt-8 text-center text-[10px] leading-5 text-[#9a858a]">Catalog changes are saved in this browser only. Connect a secure backend before using admin controls on a public store.</p>
      </div>
    </section>
  );
};

export default AdminPanel;

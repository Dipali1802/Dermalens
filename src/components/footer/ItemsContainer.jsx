import Item from "./Item";
import { DEMO, PRODUCTS, RESOURCES, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      {/* <Item Links={PRODUCTS} title="DERMALENS" /> */}
      <Item Links={DEMO} title={<span className="text-2xl font-bold">DERMALENS</span>} />
      <Item Links={PRODUCTS} title={<span className="text-2xl font-bold">EXPLORE</span>} />
      <Item Links={RESOURCES} title={<span className="text-2xl font-bold">CONTACT</span>} />
      <Item Links={SUPPORT} title={<span className="text-2xl font-bold">LEGAL</span>} />
     
    </div>
  );
};

export default ItemsContainer;
import { useContext } from 'react';
import Item from '../Components/Items/Item';
import { ShopContext } from '../Context/ShopContext';

const Shopcategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="bg-[#0b0b0b] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-baseline justify-between gap-6 border-b border-white/10">
        <div className="space-y-2">
          <h1 className="text-white text-6xl md:text-8xl font-bold tracking-tighter uppercase">
            {props.category}
          </h1>
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600"></span>
            <p className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.3em]">
              Archive Collection
            </p>
          </div>
        </div>

        <p className="text-zinc-400 text-[11px] font-medium uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full">
          {all_product.filter(p => p.category === props.category).length} Units Found
        </p>
      </div>
      {all_product.filter(p => p.category === props.category).length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-[60vh] border border-dashed border-white/10 rounded-lg mx-auto w-[90%] my-12">
          <h1 className="text-white text-4xl font-black uppercase italic tracking-tighter">
            Coming Soon
          </h1>
        </div>
      )}
      {/* Product Grid - Using a 3-column masonry-style feel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 w-[90%] mx-auto mt-6" >
        {
          all_product.map((p, i) => {
            if (props.category === p.category) {
              // Added a slight stagger effect to the grid
              return (
                <div key={i} className={`group relative ${i % 2 !== 0 ? 'lg:mt-16' : ''}`}>
                  <Item
                    id={p.id}
                    img={p.image}
                    name={p.name}
                    new_price={p.new_price}
                    old_price={p.old_price}
                  />
                </div>
              );
            }
            return null;
          })
        }
      </div >
      <style>{`
        .stroke-text-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.4);
        }
      `}</style>
    </div >
  )
}

export default Shopcategory

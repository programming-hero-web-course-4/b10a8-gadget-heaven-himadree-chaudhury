import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ComposedChart,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  // *All Products Store And Update Function
  const [products, setProducts] = useState([]);

  // *Load All Products Data
  useEffect(() => {
    fetch("gadgetProducts.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>GADGET HEAVEN | Statistics</title>
      </Helmet>

      <section className="max-w-screen-2xl p-4 mx-auto">
        <div className="text-center">
          <div className="bg-[#9538E2] text-white rounded-2xl space-y-5 pb-20 pt-12">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Statistics
            </h1>
            <p className="text-white text-sm md:text-lg w-9/12 mx-auto">
              The Statistics page presents an interactive Composed Chart,
              seamlessly blending bar, area, and scatter plots to visualize
              product pricing and ratings for intuitive comparisons !!!
            </p>
          </div>
        </div>
        <div className="py-12">
          <div style={{ width: "100%", height: 400 }}>
            <ResponsiveContainer>
              <ComposedChart data={products}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="product_title" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="price"
                  fill="#BF87EE"
                  stroke="none"
                />
                <Bar dataKey="price" barSize={30} fill="#9538E2" />
                <Scatter dataKey="rating" fill="#FF0000" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistics;

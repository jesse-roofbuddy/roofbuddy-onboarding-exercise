"use client";

import { gql, useQuery } from "@apollo/client";

const GET_MENU_ITEMS = gql`
  query GetMenuItems {
    menuItems {
      id
      name
      description
      country
      price
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Menubuddy</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.menuItems.map((item: any) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">{item.country}</span>
              <span className="font-bold">${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

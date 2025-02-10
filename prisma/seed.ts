import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.menuItem.createMany({
    data: [
      {
        name: "Margherita Pizza",
        description:
          "Classic Italian pizza with fresh tomatoes, mozzarella, and basil.",
        country: "Italy",
        price: 12.99,
      },
      {
        name: "Sushi Platter",
        description: "Assorted sushi rolls with fresh fish and vegetables.",
        country: "Japan",
        price: 18.5,
      },
      {
        name: "Tacos al Pastor",
        description:
          "Corn tortillas filled with marinated pork, pineapple, and onions.",
        country: "Mexico",
        price: 9.75,
      },
      {
        name: "Butter Chicken",
        description: "Creamy tomato-based curry with tender chicken pieces.",
        country: "India",
        price: 14.25,
      },
      {
        name: "Croissant",
        description: "Flaky, buttery French pastry perfect for breakfast.",
        country: "France",
        price: 3.5,
      },
    ],
  });

  console.log("Sample data inserted successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

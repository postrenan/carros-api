import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function seed() {
  const users = [];
  const brands = [];
  const cars = [];
  const countries = [];

  // Criando países
  for (let i = 0; i < 10; i++) {
    const country = await prisma.country.create({
      data: {
        name: faker.location.country(),
      },
    });
    countries.push(country);
  }

  // Criando marcas
  for (let i = 0; i < 2000; i++) {
    const brand = await prisma.brand.create({
      data: {
        name: faker.company.name(),
        countryId: countries[faker.number.int({ min: 0, max: countries.length - 1 })].id, // Adicionando o countryId
      },
    });
    brands.push(brand);
  }

  // Criando usuários
  for (let i = 0; i < 2000; i++) {
    const user = await prisma.user.create({
      data: {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
      },
    });
    users.push(user);
  }

  // Criando carros
  for (let i = 0; i < 2000; i++) {
    const car = await prisma.car.create({
      data: {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: faker.date.past().getFullYear(),
        price: faker.number.float({ min: 10000, max: 100000 }),
        mileage: faker.number.int({ min: 0, max: 300000 }),
        ownerId: users[faker.number.int({ min: 0, max: users.length - 1 })].id,
        brandId: brands[faker.number.int({ min: 0, max: brands.length - 1 })].id,
      },
    });
    cars.push(car);
  }

  // Criando vendas
  for (let i = 0; i < 2000; i++) {
    await prisma.sale.create({
      data: {
        carId: cars[faker.number.int({ min: 0, max: cars.length - 1 })].id,
        userId: users[faker.number.int({ min: 0, max: users.length - 1 })].id,
        price: faker.number.float({ min: 5000, max: 50000 }),
      },
    });
  }
}

seed()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from '@prisma/client';

export async function createUsers({
  users,
  prisma,
}: {
  users: { name: string; age: number }[];
  prisma: PrismaClient;
}) {
  console.log('Creating users...');

  await prisma.user.createMany({ data: users });
}

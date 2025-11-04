import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createMap = async (
  mapName,
  x1,
  y1,
  x2,
  y2,
  x3,
  y3,
  originalx,
  originaly
) => {
  const map = await prisma.maps.create({
    data: {
      name: mapName,
      obj1x: x1,
      obj1y: y1,
      obj2x: x2,
      obj2y: y2,
      obj3x: x3,
      obj3y: y3,
      originalx: originalx,
      originaly,
    },
  });
  return map;
};

const getMap = async (pick) => {
  const map = await prisma.maps.findMany({
    where: {
      name: pick,
    },
  });
  return map;
};

const createPlayer = async () => {
  const player = await prisma.gameSession.create({
    data: {
      guessedObj: [],
      guessedObjTime: [],
    },
  });
  return player;
};

const gameSession = async (id) => {
  const session = await prisma.gameSession.findUnique({
    where: {
      id,
    },
  });
  return session;
};

const addPick = async (id, obj) => {
  const session = await prisma.gameSession.update({
    where: {
      id,
    },
    data: {
      guessedObj: {
        push: obj,
      },
    },
  });
  return session;
};

export default {
  createMap,
  getMap,
  createPlayer,
  gameSession,
  addPick,
};

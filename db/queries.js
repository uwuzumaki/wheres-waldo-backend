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

const createPlayer = async (mapID) => {
  const player = await prisma.gameSession.create({
    data: {
      guessedObj: [],
      mapID,
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

const finish = async (id, finishAt, totalTime) => {
  const session = await prisma.gameSession.update({
    where: {
      id,
    },
    data: {
      finishAt,
      totalTime,
      completed: true,
    },
  });
};

const getAndCreateHighscore = async (player) => {
  const result = await prisma.$transaction(async (tx) => {
    const session = await tx.gameSession.findUnique({
      where: {
        id: player,
      },
    });

    const topTen = await tx.highScore.findMany({
      take: 10,
      where: {
        map_ID: session.mapID,
      },
      orderBy: {
        time: "asc",
      },
    });

    const highestTime = topTen[9]?.time ?? Infinity;
    const newHighscore =
      topTen.length < 10 || session.totalTime < highestTime ? true : false;

    if (newHighscore) {
      await tx.highScore.create({
        data: {
          map_ID: session.mapID,
          session_ID: session.id,
          time: session.totalTime,
        },
      });

      const updatedScores = await tx.highScore.findMany({
        where: {
          map_ID: session.mapID,
        },
        orderBy: {
          time: "asc",
        },
      });

      const notTopTen = updatedScores.slice(10);
      if (notTopTen.length > 0) {
        await tx.highScore.deleteMany({
          where: {
            map_ID: session.mapID,
            id: {
              in: notTopTen.map((not) => not.id),
            },
          },
        });
      }
    }
    return { session, newHighscore };
  });
  return result;
};

const getHighScore = async (map_ID) => {
  const topTen = await prisma.highScore.findMany({
    take: 10,
    where: {
      map_ID,
    },
    orderBy: {
      time: "asc",
    },
  });
  return topTen;
};

const updateHighScore = async (session_ID, username) => {
  const highScore = await prisma.highScore.update({
    where: {
      session_ID: session_ID,
    },
    data: {
      username,
    },
  });
  return highScore;
};

export default {
  createMap,
  getMap,
  createPlayer,
  gameSession,
  addPick,
  finish,
  getHighScore,
  getAndCreateHighscore,
  updateHighScore,
};

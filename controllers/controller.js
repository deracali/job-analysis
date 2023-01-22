import Result from "../models/resultSchema.js";
import Agriculture from "../models/agricultureSchema.js";
import Bank from "../models/bankSchema.js";
import Health from "../models/healthModel.js";
import Hotel from "../models/hotelModel.js";
import questions, { answers } from "../database/data.js";

// get questions
export async function getAgricultureQuestions(req, res) {
  const data = await Agriculture.find();

  res.status(200).json(data);
}

export async function getBankQuestions(req, res) {
  const data = await Bank.find();

  res.status(200).json(data);
}

export async function getHealthQuestions(req, res) {
  const data = await Health.find();

  res.status(200).json(data);
}

export async function getHotelQuestions(req, res) {
  const data = await Hotel.find();

  res.status(200).json(data);
}

export async function insetAgricQuestions(req, res) {
  try {
    Agriculture.insertMany(
      {
        questions,
        answers,
      },
      function (err, data) {
        res.json({ msg: "Data saved Successfully" });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function insetBankQuestions(req, res) {
  try {
    Bank.insertMany(
      {
        questions,
        answers,
      },
      function (err, data) {
        res.json({ msg: "Data saved Successfully" });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function insetHealthQuestions(req, res) {
  try {
    Health.insertMany(
      {
        questions,
        answers,
      },
      function (err, data) {
        res.json({ msg: "Data saved Successfully" });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function insetHotelQuestions(req, res) {
  try {
    Hotel.insertMany(
      {
        questions,
        answers,
      },
      function (err, data) {
        res.json({ msg: "Data saved Successfully" });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

// delete
export async function dropQuestion(req, res) {
  res.json("questions delete");
}

// result controller
// get all result
export async function getResult(req, res) {
  try {
    const r = await Result.find();
    res.status(200).json(r);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;

    if (!username && !result) throw new Error("Data Not Provided...!");

    Result.create(
      { username, result, attempts, points, achived },
      function (err, data) {
        res.json({ msg: "Result Saved Successfully" });
      }
    );
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function dropResult(req, res) {
  res.json("delete result");
}

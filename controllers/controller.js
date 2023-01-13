import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import questions, { answers } from "../database/data.js";
import Computer from "../models/computerSchema.js";

// get questions
export async function getQuestions(req, res) {
  const data = await Questions.find();

  res.status(200).json(data);
}

// get computer
export async function getComputerQuestions(req, res) {
  const data = await Computer.find();

  res.status(200).json(data);
}

// post
export async function insetQuestion(req, res) {
  try {
    Questions.insertMany(
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

// computer
export async function addComputerQuestions(req, res) {
  try {
    Computer.insertMany(
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

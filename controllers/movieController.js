import movieModel from "../models/movieModel.js";

export const listMovies = async (req, res) => {
  try {
    const data = await movieModel.find({});
    res.status(200).json({
      message: "List movies",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const createNewMovie = async (req, res) => {
  try {
    const request = req.body;
    console.log(request);

    const response = await movieModel.create({
      judul: request.judul,
      tahunRilis: request.tahunRilis,
      sutradara: request.sutradara,
    });

    res.status(201).json({
      message: "Data movie berhasil dibuat",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const id = req.params.id;
    const request = req.body;

    if (!id) {
      return res.status(400).json({
        message: "ID wajib diisi",
        data: null,
      });
    }

    const response = await movieModel.findByIdAndUpdate(id, {
      judul: request.judul,
      tahunRilis: request.tahunRilis,
      sutradara: request.sutradara,
    });

    if (!response) {
      return res.status(404).json({
        message: "Data movie tidak ditemukan",
        data: null,
      });
    }

    res.status(200).json({
      message: "Data movie berhasil diupdate",
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        message: "ID wajib diisi",
        data: null,
      });
    }

    const response = await movieModel.findByIdAndDelete(id);

    if (response) {
      return res.status(200).json({
        message: "Data movie berhasil dihapus",
        data: response,
      });
    }

    res.status(404).json({
      message: "Data movie tidak ditemukan",
      data: null,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: null,
    });
  }
};
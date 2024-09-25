import DinamicImage from "../models/dinamicImage.model.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

export const getDinamicImages = async (req, res) => {
  try {
    const products = await DinamicImage.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
export const createOrUpdateDinamicImage = async (req, res) => {
  try {
    const { images } = req.body;

    // Filtrar solo las imágenes que tienen public_id y secure_url
    const filteredImages = Object.keys(images).reduce((acc, social) => {
      if (images[social]?.public_id && images[social]?.secure_url) {
        acc[social] = images[social];
      }
      return acc;
    }, {});

    if (Object.keys(filteredImages).length === 0) {
      return res.status(400).json({ message: "No se han proporcionado imágenes válidas." });
    }

    // Buscar si ya existe una entrada en la base de datos
    const existingEntry = await DinamicImage.findOne();

    if (existingEntry) {
      // Verificar si ya hay una imagen de la red social que se está actualizando
      for (const social in filteredImages) {
        const existingImage = existingEntry.images[social];
        
        // Si existe una imagen previa y tiene un public_id, eliminarla
        if (existingImage && existingImage.public_id) {
          await deleteImage(existingImage.public_id);
        }

        // Actualizar la imagen de la red social
        existingEntry.images[social] = filteredImages[social];
      }

      // Guardar el documento actualizado
      await existingEntry.save();

      res.status(200).json({ message: "Imágenes actualizadas exitosamente", data: existingEntry });
    } else {
      // Si no hay una entrada existente, crear una nueva
      const newDinamicImage = new DinamicImage({ images: filteredImages });
      await newDinamicImage.save();

      res.status(201).json({ message: "Imágenes guardadas exitosamente", data: newDinamicImage });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al guardar las imágenes", error });
  }
};

export const deleteDinamicImage = async (req, res) => {
  const { id } = req.params;

  try {
    // Encuentra la imagen en la base de datos
    const dinamicImage = await DinamicImage.findById(id);
    if (!dinamicImage) return res.status(404).json({ message: "Imagen no encontrada" });

    // Elimina la imagen de Cloudinary
    await deleteImage(dinamicImage.public_id);

    // Elimina la imagen de la base de datos
    await DinamicImage.findByIdAndDelete(id);

    res.json({ message: "Imagen eliminada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateDinamicImage = async (req, res) => {
  const { id } = req.params;
  
  try {
    const dinamicImage = await DinamicImage.findByIdAndUpdate(id, req.body, { new: true });
    if (!dinamicImage) return res.status(404).json({ message: "Imagen no encontrada" });

    res.json(dinamicImage);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};
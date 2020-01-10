const models = require("../database/models");

const getImages = async (req, res) => {
    try {
        const images = await models.Image.findAll();

        return res.status(200).json(images);
    } catch (err) {
        return res.status(500).json({ error: err.message })
    }
};

const createImage = async (req, res) => {
    try {
        let body = req.body;
        if (Object.keys(body).includes('likes_count')) {
            console.warn('Skipping likes_count parameter');
        }

        body.likes_count = 0;

        const image = await models.Image.create(body);

        return res.status(201).json(image);
    } catch (err) {
        console.log(JSON.stringify(err));
        return res.status(500).json({ error: err.message })
    }
};

const getImageById = async (req, res) => {
    try {
        const { imageId } = req.params;
        const image = await models.Image.findOne({ where: { id: imageId } });

        if (image) {
            return res.status(200).json(image);
        }
        return res.status(404).send("Image with the specified ID does not exists");
    } catch (err) {
        console.log(JSON.stringify(err));
        return res.status(500).json({ error: err.message })
    }
};

const updateImage = async (req, res) => {
    try {
        const { imageId } = req.params;

        let body = req.body;
        if (Object.keys(body).includes('likes_count')) {
            console.warn('Skipping likes_count parameter');
            delete body['likes_count'];
        }

        const [updated] = await models.Image.update(body, {
            where: { id: imageId }
        });

        if (updated) {
            const updatedImage = await models.Image.findOne({ where: { id: imageId } });
            return res.status(200).json(updatedImage);
        }

        return res.status(404).send("Image with the specified ID does not exists");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const likeImage = async (req, res) => {
    try {
        const { imageId } = req.params;
        const [updated] = await models.Image.increment(['likes_count'], { where: { id: imageId } });

        if (updated) {
            const likedImage = await models.Image.findOne({ where: { id: imageId } });
            return res.status(200).json(likedImage);
        }

        return res.status(500).send("Cannot like image from unknown reason");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const unlikeImage = async (req, res) => {
    try {
        const { imageId } = req.params;
        const [updated] = await models.Image.decrement(['likes_count'], { where: { id: imageId } });

        if (updated) {
            const unlikedImage = await models.Image.findOne({ where: { id: imageId } });
            return res.status(200).json(unlikedImage);
        }

        return res.status(500).send("Cannot unlike image from unknown reason");
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

const deleteImage = async (req, res) => {
    try {
      const { imageId } = req.params;
      const deleted = await models.Image.destroy({
        where: { id: imageId }
      });
      if (deleted) {
        return res.status(204).send("Image deleted");
      }
      throw new Error("Image not found");
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

module.exports = {
    getImages,
    createImage,
    getImageById,
    updateImage,
    likeImage,
    unlikeImage,
    deleteImage,
};
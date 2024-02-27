const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { router: ProductRouter } = require("./middleware/productRouter");

const { router: ImagesRouter } = require("./middleware/imagesRouter");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", ProductRouter);

router.use("/images", ImagesRouter);






module.exports = router;
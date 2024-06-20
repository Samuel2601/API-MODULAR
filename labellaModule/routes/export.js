import admin from "./admin.js";
import creat from "./create.js";
import delet from "./delete.js";
import filt from "./filter.js";
import list from "./list.js";
import pass from "./passwordRoutes.js";
import updat from "./update.js";

import { Router } from 'express';
const labella = Router();

labella.use('/helper', admin);
labella.use('/create', creat);
labella.use('/delete', delet);
labella.use('/filter', filt);
labella.use('/list', list);
labella.use('/helper', pass);
labella.use('/update', updat);

export default labella;

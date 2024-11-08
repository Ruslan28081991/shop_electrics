import './style.css';
import { ItemController } from './src/item/item.controller';

const app = new ItemController();
app.pullFirebase();
app.getOrder();

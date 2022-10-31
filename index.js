const express = require('express');
const userRouter = require('./routes/user.route');
const postRouter = require('./routes/post.router');

const PORT = 5000;

const app = express();

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', postRouter);


app.listen(PORT, () => console.log(`Server initializeted on PORT ${PORT}`));

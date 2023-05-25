const mongoose = require("mongoose");

const TaskShema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "タスク名を入れてください"],
        trim: true,
        maxlength: [20, "タスク名は２０文字以内で入力してください"]
    },
    completed: {
        type: Boolean,
        default: false,
        //idはmongoDBで自動で割り振られるため設定しない。
    }
});

module.exports = mongoose.model("Task", TaskShema);
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builders_1 = require("@discordjs/builders");
const database_1 = require("../modules/database");
const types_1 = require("../types");
module.exports = new types_1.Command(new builders_1.SlashCommandBuilder().setName("가입").setDescription("주식 서버에 가입합니다. 최초 1회만 필요합니다."), async (interaction, bot) => {
    try {
        await (0, database_1.createUser)(interaction.user.id);
        return await interaction.editReply((0, types_1.Embed)({
            color: "#008000",
            icon: "white_check_mark",
            title: "가입 완료",
            description: "가입이 완료되었습니다.",
        }));
    }
    catch (err) {
        return await interaction.editReply((0, types_1.Embed)({
            color: "#ff0000",
            icon: "warning",
            title: "오류",
            description: "이미 주식 서버에 가입되어 있습니다.",
        }));
    }
});

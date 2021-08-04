import type { Word } from 'languages';

export const markDictionary: Word[] = [
  { source: 'nightmare', target: '夢魘' },
  { source: 'ren', target: '忍' },
  { source: 'lie', target: '烈' },
  { source: 'nu', target: '暴怒' },
  { source: 'ying', target: '營' },
];

export const generalDictionary: Word[] = [
  { source: 'cheat', target: '作弊' },
  { source: 'cheat_description', target: '可以獲得任意牌（僅用於測試）' },
  { source: 'standard', target: '標準版' },
  { source: 'legion_fight', target: '軍爭篇' },
  { source: 'wind', target: '風' },
  { source: 'forest', target: '林' },
  { source: 'fire', target: '火' },
  { source: 'mountain', target: '山' },
  { source: 'wei', target: '魏' },
  { source: 'shu', target: '蜀' },
  { source: 'wu', target: '吳' },
  { source: 'qun', target: '群' },
  { source: 'god', target: '神' },
  { source: 'unknown', target: '未知' },
  { source: 'lord', target: '主公' },
  { source: 'loyalist', target: '忠臣' },
  { source: 'rebel', target: '反賊' },
  { source: 'renegade', target: '內奸' },
  { source: 'seat 0', target: '一號位' },
  { source: 'seat 1', target: '二號位' },
  { source: 'seat 2', target: '三號位' },
  { source: 'seat 3', target: '四號位' },
  { source: 'seat 4', target: '五號位' },
  { source: 'seat 5', target: '六號位' },
  { source: 'seat 6', target: '七號位' },
  { source: 'seat 7', target: '八號位' },
  { source: 'you', target: '你' },
  { source: 'heart', target: '紅桃' },
  { source: 'spade', target: '黑桃' },
  { source: 'club', target: '梅花' },
  { source: 'diamond', target: '方塊' },
  { source: 'attack range:', target: '攻擊距離：' },

  { source: 'draw stack', target: '摸牌堆' },
  { source: 'drop stack', target: '棄牌堆' },
  { source: 'hand area', target: '手牌區' },
  { source: 'equip area', target: '裝備區' },
  { source: 'judge area', target: '判定區' },
  { source: 'outside area', target: '額外區域' },

  { source: 'prepare stage', target: '準備階段' },
  { source: 'judge stage', target: '判定階段' },
  { source: 'draw stage', target: '摸牌階段' },
  { source: 'play stage', target: '出牌階段' },
  { source: 'drop stage', target: '棄牌階段' },
  { source: 'finish stage', target: '結束階段' },

  { source: 'basic card', target: '基本牌' },
  { source: 'equip card', target: '裝備牌' },
  { source: 'trick card', target: '錦囊牌' },
  { source: 'delayed trick card', target: '延時錦囊牌' },
  { source: 'armor card', target: '防具牌' },
  { source: 'weapon card', target: '武器牌' },
  { source: 'defense ride card', target: '防禦馬' },
  { source: 'offense ride card', target: '進攻馬' },
  { source: 'precious card', target: '寶物牌' },

  { source: 'weapon section', target: '武器欄' },
  { source: 'shield section', target: '防具欄' },
  { source: 'ride section', target: '坐騎欄' },
  { source: 'defense ride section', target: '防禦坐騎欄' },
  { source: 'offense ride section', target: '進攻坐騎欄' },
  { source: 'precious', target: '寶物欄' },
];

export const eventDictionary: Word[] = [
  { source: 'dead', target: '陣亡' },
  { source: 'alive', target: '存活' },
  { source: 'winners', target: '勝利玩家' },
  { source: 'losers', target: '戰敗玩家' },
  { source: 'save replay', target: '保存錄像' },
  { source: 'game over, winner is {0}', target: '遊戲結束，{0} 勝利' },
  { source: 'turn overed', target: '翻麵' },
  { source: 'option-one', target: '選項一' },
  { source: 'option-two', target: '選項二' },
  { source: 'standard-game', target: '身份場' },
  { source: '1v2', target: '鬥地主' },
  { source: 'hegemony-game', target: '國戰' },
  { source: 'back to lobby', target: '返回大廳' },
  { source: 'updating core version to {0}, downloading...', target: '內核版本升級至 {0}，下載中...' },
  { source: 'Update complete, please restart client to complete update', target: '升級完成，請重啓客戶端完成更新' },

  { source: 'yes', target: '是' },
  { source: 'no', target: '否' },
  { source: '({0})', target: '({0})' },
  { source: '[{0}]', target: '[{0}]' },
  { source: 'nosuit', target: '無色' },
  { source: 'red', target: '黑色' },
  { source: 'black', target: '紅色' },
  { source: '[', target: '【' },
  { source: ']', target: '】' },
  { source: '{0} round start', target: '====== {0} 的回合開始 ======' },
  { source: 'normal_property', target: '無屬性' },
  { source: 'fire_property', target: '火屬性' },
  { source: 'thunder_property', target: '雷屬性' },
  { source: 'obtained', target: '獲得' },
  { source: 'lost', target: '失去' },
  { source: 'please select a game mode', target: '選擇遊戲模式' },
  { source: 'please select character extensions', target: '選擇武將擴展包' },
  { source: '{0} {1} {2} {3} marks', target: '{0} {1}了 {2} 枚 {3} 標記' },
  { source: 'please choose a skill', target: '請選擇一個技能' },
  { source: '{0} select nationaliy {1}', target: '{0} 選擇了 {1} 勢力' },
  { source: 'move to drop stack', target: '移動至棄牌堆' },
  { source: '{0} aborted {1} equip section', target: '{0} 廢除了 {1}' },
  { source: '{0} resumed {1} equip section', target: '{0} 恢復了 {1}' },
  { source: '{0} aborted judge area', target: '{0} 廢除了判定區' },
  { source: '{0} resumed judge area', target: '{0} 恢復了判定區' },
  {
    source: 'do you want to trigger skill {0} ?',
    target: '是否發動技能 【{0}】?',
  },
  {
    source: 'do you want to trigger skill {0} from {1} ?',
    target: '是否發動 {1} 的技能 【{0}】？',
  },
  {
    source: 'do you want to trigger skill {0} to {1} ?',
    target: '是否對 {1} 使用 【{0}】？',
  },
  {
    source: '{0} draws {1} cards',
    target: '{0} 摸了 {1} 張牌',
  },
  { source: '{0} is {1}, waiting for selecting a character', target: '{0} 是 {1}，正在等待其選將' },
  {
    source: 'your role is {0}, please choose a lord',
    target: '你的身份是 {0}, 請選擇一名武將做為主公',
  },
  {
    source: 'lord is {0}, your role is {1}, please choose a character',
    target: '主公是【{0}】, 你的身份是 {1}, 請選擇一名武將',
  },
  {
    source: 'please choose a character',
    target: '請選擇一名武將',
  },
  {
    source: 'please choose a skin',
    target: '請選擇一个皮肤',
  },
  {
    source: 'please choose a nationality',
    target: '請選擇一個勢力',
  },
  {
    source: 'please choose a card',
    target: '請選擇一張牌',
  },
  { source: "{0}'s judge card", target: '{0} 的判定牌' },
  {
    source: '{0} got judged card {2} on {1}',
    target: '{0} 的 {1} 判定結果為 {2}',
  },
  {
    source: '{0} recovered {2} hp for {1}',
    target: '{0} 使 {1} 回複了 {2} 點體力',
  },
  {
    source: '{0} recovered {1} hp',
    target: '{0} 回複了 {1} 點體力',
  },
  {
    source: '{0} lost {1} hp',
    target: '{0} 失去了 {1} 點體力',
  },
  { source: '{0} lost {1} max hp', target: '{0} 失去了 {1} 點體力上限' },
  { source: '{0} obtained {1} max hp', target: '{0} 獲得了 {1} 點體力上限' },
  {
    source: '{0} used {1} to you, please use a {2} card',
    target: '{0} 對你使用了 {1}, 使用一張 【{2}】來響應',
  },
  {
    source: 'please use a {0} card to response {1}',
    target: '請使用一張【{0}】來響應 {1}',
  },
  {
    source: 'please response a {0} card to response {1}',
    target: '請打出一張【{0}】來響應 {1}',
  },
  {
    source: '{0} obtained skill {1}',
    target: '{0} 獲得了技能 【{1}】',
  },
  {
    source: '{0} lost skill {1}',
    target: '{0} 失去了技能 【{1}】',
  },
  {
    source: 'please select to use a {0}',
    target: '請選擇使用一張【{0}】',
  },
  { source: 'please use a {0} to player {1} to response {2}', target: '請對 {1} 使用一張【{0}】來響應 {2}' },
  { source: '{0} activated awakening skill {1}', target: '{0} 的覺醒技 【{1}】 技能被觸發' },
  { source: '{0} used skill {1}', target: '{0} 使用了技能【{1}】' },
  { source: '{0} used skill {1} to {2}', target: '{0} 使用了技能【{1}】, 目標是 {2}' },
  {
    source: '{0} hits {1} {2} hp of damage type {3}',
    target: '{0} 對 {1} 造成了 {2} 點【{3}】傷害',
  },
  {
    source: '{0} turned over the charactor card, who is {1} right now',
    target: '{0} 將武將牌翻麵，現在是 {1}',
  },
  { source: 'facing up', target: '正麵朝上' },
  { source: 'turning over', target: '背麵朝上' },
  {
    source: '{0} got hurt for {1} hp with {2} property',
    target: '{0} 受到了 {1} 點【{2}】傷害',
  },
  { source: 'please choose a card', target: '請選擇一張卡牌' },
  { source: '{0} obtains cards {1}', target: '{0} 獲得了 {1} ' },
  {
    source: '{0} obtains cards {1} from {2}',
    target: '{0} 獲得了 {2} 的一張 {1} ',
  },
  {
    source: '{0} obtains {1} cards from {2}',
    target: '{0} 獲得了 {2} 的 {1} 張牌',
  },
  { source: 'please assign others no more than 2 handcards', target: '是否將至多兩張手牌交給其他角色' },
  { source: '{0} obtains {1} cards', target: '{0} 獲得了 {1} 張牌' },
  { source: 'please drop {0} cards', target: '請棄置 {1} 張牌' },
  { source: 'please drop {1} to {2} cards', target: '請棄置至少 {1}、至多 {2} 張牌' },
  { source: '{0} drops cards {1}', target: '{0} 棄置了 {1}' },
  { source: '{0} drops cards {1} by {2}', target: '{2} 棄置了 {0} 的 {1}' },
  { source: '{0} has been placed into drop stack', target: '{0} 置入了棄牌堆' },
  { source: '{0} has been placed on the top of draw stack', target: '{0} 置入了牌堆頂' },
  { source: '{0} has been placed on the bottom of draw stack', target: '{0} 置入了牌堆底' },
  { source: '{0} has been placed into drop stack from {1}', target: '{1} 將 {0} 置入了棄牌堆' },
  { source: '{0} has been placed on the top of draw stack from {1}', target: '{1} 將 {0} 置入了牌堆頂' },
  { source: '{0} has been placed on the bottom of draw stack from {1}', target: '{1} 將 {0} 置入了牌堆底' },
  { source: '{0} lost card {1}', target: '{0} 失去了 {1}' },
  { source: '{0} lost {1} cards', target: '{0} 失去了 {1} 張牌' },
  { source: '{0} used card {1}', target: '{0} 使用了一張 {1}' },
  { source: '{0} used card', target: '{0} 使用' },
  { source: '{0} used skill {1}, response card {2}', target: '{0} 使用了技能 【{1}】，打出了一張 {2}' },
  { source: '{0} used skill {1}, use card {2}', target: '{0} 使用了技能 【{1}】，使用了一張 {2}' },
  { source: '{0} used skill {1}, use card {2} to {3}', target: '{0} 使用了技能 【{1}】，使用了一張 {2}，目標是 {3}' },
  { source: 'Please choose your slash target', target: '請選擇【殺】的目標' },
  { source: 'draw stack top', target: '置於牌堆頂的牌' },
  { source: 'draw stack bottom', target: '置於牌堆底的牌' },
  { source: '{0} used skill {1} to you, please choose', target: '{0} 對你使用了技能 【{1}】，請選擇' },
  { source: 'lose a hp', target: '失去一點體力' },
  { source: 'drop all {0} cards', target: '棄置所有 {0} 牌' },
  { source: '{0} displayed cards {1}', target: '{0} 展示了 {1}' },
  { source: '{0} displayed {1} cards to {2}', target: '{0} 對 {2} 展示了 {1}' },
  { source: 'cards displayed to you', target: '對你展示的牌' },
  { source: '{0} display handcards to you', target: '{0} 對你展示了手牌' },
  { source: '{0} displayed guhuo cards {1}', target: '{0} 展示了蠱惑牌 {1}' },
  { source: '{0} displayed cards {1} from top of draw stack', target: '{0} 展示了牌堆頂的一張 {1}' },
  { source: 'please choose another player or click cancel', target: '請選擇一名其他角色或點擊取消' },
  { source: '{0} reforged card {1}', target: '{0} 重鑄了 {1}' },
  { source: '{0} {1} character card', target: '{0} {1} 了武將牌' },
  { source: 'rotate', target: '橫置' },
  { source: 'reset', target: '重置' },
  {
    source: '{0} proposed a pindian event, please choose a hand card to pindian',
    target: '{0} 對你發起了拚點，請選擇一張手牌用於拚點',
  },
  { source: '{0} used {1} to respond pindian', target: '{0} 展示了拚點牌 {1}' },
  { source: 'pindian result:{0} win', target: '拚點結果為 {0} 贏' },
  { source: 'pindian result:draw', target: '拚點結果為 平局' },
  {
    source: "please drop a {0} card, otherwise you can't do response of slash",
    target: '請棄置一張 {0} 牌，否則此殺不可被響應',
  },
  {
    source: 'please response a card to replace judge card {0} from {1}',
    target: '請打出一張手牌替換 {1} 的判定牌 {0}',
  },
  {
    source: '{0} responsed card {1} to replace judge card {2}',
    target: '{0} 打出了 {1} 替換了判定牌 {2}',
  },
  { source: '{0} starts a judge of {1}, judge card is {2}', target: '{0} 開始了 {1} 的判定，判定牌為 {2}' },
  {
    source: 'guanxing finished, {0} cards placed on the top and {1} cards placed at the bottom',
    target: '觀星結束，結果為 {0} 上 {1} 下',
  },
  {
    source: '{0} used skill {1}, transformed {2} as {3} card to response',
    target: '{0} 使用了技能 【{1}】 將 {2} 當做 {3} 打出',
  },
  {
    source: '{0} used skill {1}, transformed {2} as {3} card to use',
    target: '{0} 使用了技能 【{1}】 將 {2} 當做 {3} 使用',
  },
  {
    source: '{0} used skill {1}, transformed {2} as {3} card used to {4}',
    target: '{0} 使用了技能 【{1}】 將 {2} 當做 {3} 使用，目標是 {4}',
  },
  {
    source: '{0} used card {1} to {2}',
    target: '{0} 使用了一張 {1}，目標是 {2}',
  },
  {
    source: '{0} used card to {1}',
    target: '{0} 對 {1} 使用',
  },
  { source: '{0} equipped {1}', target: '{0} 裝備了 {1}' },
  { source: '{0} is placed into drop stack', target: '{0} 置入了棄牌堆' },
  { source: '{0} responses card {1}', target: '{0} 打出了一張 {1}' },
  { source: '{0} responded card', target: '{0} 打出' },
  { source: 'please drop {0} cards', target: '請棄置 {0} 張牌' },
  { source: '{0} skipped draw stage', target: '{0} 跳過了摸牌階段' },
  { source: '{0} skipped play stage', target: '{0} 跳過了出牌階段' },
  { source: '{0} is dying', target: '{0} 進入了瀕死階段' },
  {
    source: '{0} asks for {1} peach',
    target: '{0} 處於瀕死狀態，是否對其使用 {1} 個【桃】？',
  },
  { source: '{0} was killed', target: '{0} 已陣亡，死於天災' },
  { source: '{0} was killed by {1}', target: '{0} 已陣亡，兇手是 {1}' },
  { source: 'the role of {0} is {1}', target: '{0} 的身份是 {1}' },
  { source: '{0} recovers {1} hp', target: '{0} 恢複了 {1} 點體力' },
  {
    source: '{0} got hits from {1} by {2} {3} hp',
    target: '{0} 受到了來自 {1} 的 {2} 點【{3}】傷害',
  },
  { source: '{0} moved all hand cards out of the game', target: '{0} 將所有手牌移出了遊戲' },
  { source: '{0} use skill {1}, bring {2} to hell', target: '{0} 使用了技能 {1}，殺死了 {2}' },
  {
    source: 'do you wanna use {0} for {1} from {2}',
    target: '是否對 {2} 的 {1} 使用 {0}',
  },
  {
    source: 'do you wanna use {0} for {1} from {2} to {3}',
    target: '是否對 {2} 對 {3} 使用 的 {1} 使用 {0}',
  },
  {
    source: 'do you wanna use {0} for {1}',
    target: '是否對 {1} 使用 {0}',
  },
  {
    source: 'do you wanna use {0} for {1} to {2}',
    target: '是否對目標為 {2} 的 {1} 使用 {0}',
  },
  {
    source: '{0} used {1} to you, please response a {2} card',
    target: '{0} 對你使用了 {1}, 打出一張 【{2}】 來響應',
  },
  { source: 'please response a {0} card', target: '是否打出一張 【{0}】 響應' },
  {
    source: '{0} used skill {1} to you, please response a {2} card',
    target: '{0} 對你使用了 【{1}】, 打出一張 {2} 來響應',
  },
  {
    source: 'do you wanna response a {0} card for skill {1} from {2}',
    target: '是否打出一張 【{0}】 來響應 {2} 的 【{1}】',
  },
  { source: '{0} display hand card {1} from {2}', target: '{0} 展示了 {2} 的一張 {1}' },
  { source: '{0} display hand card {1}', target: '{0} 展示了 {1}' },
  { source: '{0} displayed card', target: '{0} 展示' },
  { source: '{0} lost {1} hand card', target: '{0} 失去了 {1} 張手牌' },
  { source: 'please choose', target: '請選擇' },
  { source: '{0}: please choose', target: '{0}：請選擇一項' },
  { source: 'please choose a player', target: '請選擇一名角色' },
  { source: '{0} place card {1} from {2} on the top of draw stack', target: '{0} 將 {2} 的 {1} 置於了牌堆頂' },
  { source: '{0} place card {1} from {2} into equip area of {3}', target: '{0} 將 {2} 的 {1} 置於了 {3} 的裝備區' },
  { source: 'recover {0} hp for {1}', target: '是否回複 {1} {0} 點體力' },
  { source: '{0} used skill {1}, damage increases to {2}', target: '{0} 使用了技能 【{1}】，傷害增加至 {2} 點' },
  { source: '{0} triggered skill {1}, damage reduces to {2}', target: '{0} 觸發了技能 【{1}】，傷害減少至 {2} 點' },
  { source: '{0} used skill {1} to you, please present a hand card', target: '{0} 使用了技能 【{1}】，請展示一張手牌' },
  { source: '{0} used {1} to you, please present a hand card', target: '{0} 對你使用了 {1}，請展示一張手牌' },
  { source: '{0} move cards {1} onto the top of {2} character card', target: '{0} 將 {1} 置於了 {2} 的武將牌上' },
  { source: '{0} move {1} cards onto the top of {2} character card', target: '{0} 將 {1} 張牌置於了 {2} 的武將牌上' },
  { source: '{0}: please present a hand card', target: '你成為了 {0} 的目標，請展示一張手牌' },
  { source: '{0} used skill {1}, transfrom {2} into {3}', target: '{0} 使用了技能 【{1}】，將 {2} 改為了 {3} 使用' },
  { source: '{0}: please choose a player to obtain {1}', target: '{0}：你可以將 {1} 交給一名角色' },
  { source: '{0}: please choose a player to drop', target: '{0}：你可以棄置攻擊範圍內含有你的一名角色區域內的一張牌' },
  {
    source: '{0}: do you want to transfrom {1} into fire slash?',
    target: '{0}：你可以將{1}變為火【殺】',
  },
  {
    source: '{0}: do you want to draw {1} card(s)?',
    target: '{0}：你可以摸 {1} 張牌',
  },
  {
    source: '{0}: do you want to draw {1} card(s) additionally?',
    target: '{0}：你可以多摸 {1} 張牌',
  },
  {
    source: '{0} triggered skill {1}',
    target: '{0} 觸發了技能 【{1}】',
  },
  {
    source: '{0} triggered skill {1}, nullify {2}',
    target: '{0} 觸發了技能 【{1}】，使 {2} 對其無效',
  },
  { source: '{0} triggered skill {1}, obtained card {2}', target: '{0} 觸發了技能 【{1}】，獲得了 {2}' },
  {
    source: '{0} triggered skill {1}, become the source of damage dealed by {2}',
    target: '{0} 觸發了技能 【{1}】，成為了 {2} 造成的傷害的傷害來源',
  },
  {
    source: '{0} triggered skill {1}, prevent the damage',
    target: '{0} 觸發了【{1}】的效果，防止了此傷害',
  },
  {
    source: '{0}: please choose a card type or color',
    target: '{0}：請選擇以下一種選項，係統將會亮出牌堆中符合條件的第一張牌，然後你將之交給一名男性角色',
  },
  {
    source: 'jianyan:Please choose a target to obtain the card you show',
    target: '薦言：請選擇一名男性角色獲得此牌',
  },
  {
    source: '{0}: do you want to use a slash to {1}?',
    target: '{0}：你可以對 {1} 使用一張【殺】（無距離限製）',
  },
  {
    source: '{0}: do you agree to pindian with {1}',
    target: '{0}：你是否同意和 {1} 進行拚點？',
  },
  {
    source: '{0}: do you want to obtain pindian cards: {1}',
    target: '{0}：你可以獲得拚點牌 {1}',
  },
  {
    source: 'please drop a {0} hand card to hit {1} 1 hp of damage type fire',
    target: '請棄置一張 {0} 手牌，對 {1} 造成1點火焰傷害',
  },
  { source: 'please choose a player to get a damage from {0}', target: '請選擇一名角色受到來自 {0} 的 1 點傷害' },
  {
    source: 'Obtain Basic Card, Equip Card and Duel in display cards?',
    target: '裸衣：是否放棄摸牌，然後獲取展示牌中的基本牌、裝備牌和【決鬥】',
  },
  {
    source: '{0} used skill {1}, display cards: {2}',
    target: '{0} 使用技能 {1}，展示了：{2}',
  },
  {
    source: 'jijie:Please choose a target to obtain the card you show',
    target: '機捷：請選擇一名角色獲得你觀看的牌',
  },
  {
    source: 'wushuang: please use extral jink',
    target: '無雙：請額外使用一張 【閃】',
  },
  {
    source: 'wushuang: please use extral slash',
    target: '無雙：請額外打出一張 【殺】',
  },
  {
    source: 'liyu: please choose a player, as target of {0} duel',
    target: '利馭：請選擇一名角色作為 {0} 決鬥的目標',
  },
  {
    source: 'please choose jiangchi options',
    target:
      '請選擇：1.摸兩張牌，此階段不可使用或打出【殺】；2.摸一張牌；3.棄置一張牌，本回合【殺】無距離限制且使用次數+1',
  },
  {
    source: 'zhijian: do you wanna use draw 1 card',
    target: '直諫：你可以發動【直諫】摸一張牌',
  },
  {
    source: 'guzheng: do you wanna obtain the rest of cards?',
    target: '固政：是否獲得剩餘的牌？',
  },
  {
    source: 'tiaoxin: you are provoked by {0}, do you wanna use slash to {0}?',
    target: '{0} 對你發動了“挑釁”，是否對包括其在內的角色使用一張【殺】？',
  },
  {
    source: 'fangquan: choose 1 card and 1 player to whom you ask play one round',
    target: '放權：你可以棄置一張手牌並選擇一名其他角色，該角色將於回合結束後進行一個額外回合',
  },
  {
    source: 'xiangle: please drop 1 basic card else this Slash will be of no effect to {0}',
    target: '享樂：請棄置一張基本牌，否則此【殺】將對 {0} 無效',
  },
  {
    source: '{0} sishu effect, lebusishu result will reverse',
    target: '{0} 的“思蜀”效果被觸發，其將要進行的【樂不思蜀】判定效果反轉',
  },
  {
    source:
      'please choose: 1. show a character from huashen area and announce a skill to obtain. 2. remove no more than two unshown characters of huashen and get equal number of that.',
    target:
      '請選擇：1.從化身牌中亮出一張武將牌並聲明一個技能（鎖定技、主公技、限定技除外）獲得之；2.移去一至二張未亮出的化身牌並獲得等量的化身牌',
  },
  {
    source: 'huashen: please announce a skill to obtain',
    target: '化身：請聲明一個技能獲得之',
  },
  {
    source: 'wuhun:Please choose a target to die with you',
    target: '請選擇一名角色進行【武魂】的判定，若結果不為【桃】或【桃園結義】，其立即死亡',
  },
  {
    source: 'qinyin: loseHp',
    target: '失去體力',
  },
  {
    source: 'qinyin: recoverHp',
    target: '回複體力',
  },
  {
    source: 'qinyin: please choose a choice to make everyone lose hp or recover hp',
    target: '琴音：你可以令全場角色依次失去 1 點體力或回複 1 點體力',
  },
  {
    source: 'yeyan: 1 point',
    target: '1 點',
  },
  {
    source: 'yeyan: 2 point',
    target: '2 點',
  },
  {
    source: 'yeyan: 3 point',
    target: '3 點',
  },
  {
    source: 'yeyan: cancel',
    target: '取消',
  },
  {
    source: 'please assign damage for {0}',
    target: '請為 {0} 分配傷害點數',
  },
  {
    source: 'please assign damage for {0}, {1}',
    target: '請為 {0}、{1} 分配傷害點數',
  },
  {
    source: 'please assign damage for {0}, {1}, {2}',
    target: '請為 {0}、{1}、{2} 分配傷害點數',
  },
  {
    source: 'please assign x damage for {0}, and {1} will get (3 - x) damage',
    target: '請為 {0} 分配 x 點傷害，{1} 將會分配到 (3 - x) 點傷害',
  },
  { source: 'please choose {0} handcards and give them to a target', target: '請選擇 {0} 張手牌交給一名其他角色' },
  {
    source: '{0} used skill {1}, swapped {2} handcards from qixing cards pile',
    target: '{0} 使用了技能 【{1}】，從七星堆交換了 {2} 張牌',
  },
  {
    source: 'dawu: card to drop',
    target: '棄牌區',
  },
  {
    source: 'Please choose {0} player to set {1} mark',
    target: '請選擇 {0} 名角色，其獲得‘{1}’標記',
  },
  {
    source: '{0} used skill {1}, nullified damage event',
    target: '{0} 使用了技能 【{1}】，防止了此次傷害',
  },
  {
    source: 'cuike: do you wanna to throw {0} marks to do special skill',
    target: '摧克：你可以棄 {0} 枚“軍略”對其他角色各造成1點傷害',
  },
  {
    source: 'zhanhuo: please choose a target to whom you cause 1 fire damage',
    target: '綻火：請選擇一名角色對其造成1點火焰傷害',
  },
  {
    source: 'wumou: loseHp',
    target: '失去體力',
  },
  {
    source: 'wumou: loseMark',
    target: '失去標記',
  },
  {
    source: 'wumou: please choose the cost for your Normal Trick',
    target: '請選擇：失去 1 點體力或失去 1 枚‘狂暴’標記',
  },
  {
    source: 'shenfen: please select 4 cards to drop',
    target: '神憤：請棄置 4 張手牌',
  },
  { source: '{0} obtained character cards {1}', target: '{0} 獲得了武將 {1}' },
  { source: '{0} swapped {1} character cards', target: '{0} 交換了 {1} 張武將牌' },
  { source: 'huashen skill:{0}', target: '化身: {0}' },

  { source: 'cixiongjian:drop-card', target: '棄置一張手牌' },
  { source: 'cixiongjian:draw-card', target: '令其摸一張牌' },
  { source: 'jizhi:discard', target: '棄置' },
  { source: 'jizhi:keep', target: '保留' },
  { source: 'do you wanna discard {0}', target: '是否棄置 {0} 增加一手牌上限' },
  { source: 'please choose a basic card to use', target: '請選擇一張基本卡使用' },
  { source: 'jieyin:drop', target: '棄置此牌' },
  { source: 'jieyin:move', target: '置於其裝備區' },
  { source: 'gongxin:putcard', target: '置於牌堆頂' },
  { source: 'gongxin:dropcard', target: '棄置此牌' },
  { source: 'yijue:recover', target: '令其回複一點體力' },
  { source: 'yijue:cancel', target: '取消' },
  { source: 'yaowu:recover', target: '回複1點體力' },
  { source: 'yaowu:draw', target: '摸一張牌' },
  { source: 'luoyi:obtain', target: '是' },
  { source: 'luoyi:cancel', target: '否' },
  { source: 'jiangchi:draw', target: '摸一張牌' },
  { source: 'jiangchi:drop', target: '棄一張牌' },
  { source: 'kuanggu:draw', target: '摸一張牌' },
  { source: 'kuanggu:recover', target: '回複1點體力' },
  { source: 'guhuo:doubt', target: '質疑' },
  { source: 'guhuo:no-doubt', target: '不質疑' },
  { source: 'do you doubt the pre-use of {0} from {1}', target: '是否質疑 {1} 使用的 {0}' },
  { source: '{0} selected {1}', target: '{0} 選擇了 {1}' },
  { source: 'guhuo:lose-hp', target: '失去一點體力' },
  { source: 'guhuo:drop-card', target: '棄置一張牌' },
  { source: 'jianyan:red', target: '紅色牌' },
  { source: 'jianyan:black', target: '黑色牌' },
  { source: 'zhiji:drawcards', target: '摸兩張牌' },
  { source: 'zhiji:recover', target: '回複1點體力' },
  { source: '1v2:recover', target: '回複1點體力' },
  { source: '1v2:draw', target: '摸2張牌' },
  { source: 'please choose the amount of hp to lose', target: '請選擇要失去的體力值' },
  { source: 'please choose your zhiheng cards', target: '請選擇要製衡的牌' },
  {
    source: 'please choose tianxiang options',
    target: '請選擇：1.令其受到1點傷害，然後摸X張牌（X為其失去的體力值）。2.令其失去1點體力，然後其獲得你棄置的牌',
  },
  { source: 'do you wanna transfer the card {0} target to {1}', target: '是否將【{0}】的使用目標改為【{1}】' },
  {
    source: 'please choose fangzhu options:{0}',
    target: '請選擇：1.摸{0}張牌並翻麵；2.棄置{0}張牌並失去1點體力',
  },
  {
    source: 'please choose yinghun options:{0}:{1}',
    target: '請選擇：1.令 {0} 摸一張牌，然後棄置 {1} 張牌；2.令 {0} 摸 {1} 張牌，然後棄置一張牌',
  },
  {
    source: 'player {0} join in the room',
    target: '玩家 {0} 進入了房間',
  },
  {
    source: 'player {0} has left the room',
    target: '玩家 {0} 退出了房間',
  },
  { source: 'player {0} has disconnected from the room', target: '玩家 {0} 斷開了連接' },
  {
    source: 'player {0} re-enter in the room',
    target: '玩家 {0} 重新回到了遊戲',
  },
  {
    source: 'game will start within 3 seconds',
    target: '遊戲將在3秒後開始',
  },
];

export const UiDictionary: Word[] = [
  { source: 'No rooms at the moment', target: '還沒有玩家建立房間' },
  { source: 'Create a room', target: '建立房間' },
  { source: 'waiting', target: '等待中' },
  { source: 'playing', target: '遊戲中' },
  { source: "{0}'s room", target: '{0} 的房間' },
  { source: 'incorrect passcode', target: '密碼錯誤' },
  { source: 'please enter your room name', target: '房間名' },
  { source: 'please enter your room passcode', target: '房間密碼' },
  { source: 'please choose number of players', target: '選擇玩家數' },
  { source: '{0} players', target: '{0} 個玩家' },
  { source: 'one player', target: '單刀赴會' },
  { source: 'two players', target: '同舟共濟' },
  { source: 'please enter your username', target: '玩家名稱' },
  {
    source: 'Unmatched core version, please update your application',
    target: '核心版本不匹配，請升級你的客戶端版本',
  },
  { source: 'Refresh room list', target: '重新整理房間' },
  { source: 'please input your username here', target: '在此設定玩家名稱後可開始遊戲' },
  { source: 'Change username', target: '更改玩家名' },
  { source: 'core version: {0}', target: '核心版本 {0}' },
  { source: 'Join', target: '加入' },
  { source: 'lobby', target: '大廳' },
  { source: 'room', target: '房間' },
  { source: 'room id', target: '房間號' },
  { source: 'circle {0}', target: '第 {0} 輪' },
  { source: '{0} draw cards left', target: '剩餘 {0} 牌' },
  { source: 'please enter your text here', target: '在此輸入聊天內容' },
  { source: 'send', target: '傳送' },
  { source: '{0} {1} says: {2}', target: '{0} {1} 說：{2}' },
  { source: 'player name', target: '玩家名' },
  { source: 'character name', target: '武將' },
  { source: 'role', target: '身份' },
  { source: 'status', target: '狀態' },
  { source: 'handcards', target: '手牌' },
  { source: 'check', target: '檢視' },
  { source: 'offline', target: '斷線' },
  { source: 'smart-ai', target: '電腦' },
  { source: 'quit', target: '退出' },
  { source: 'trusted', target: '託管' },
  { source: 'cancel trusted', target: '取消託管' },
  { source: 'in trusted', target: '託管中···' },
  {
    source: 'New QSanguosha',
    target: '新神殺',
  },
  {
    source: 'confirm',
    target: '確定',
  },
  {
    source: 'reforge',
    target: '重鑄',
  },
  {
    source: 'cancel',
    target: '取消',
  },
  {
    source: 'finish',
    target: '結束',
  },
  { source: 'main volume', target: '音樂音量' },
  { source: 'game volume', target: '遊戲音量' },
  { source: 'open sideboard', target: '顯示戰報' },
  { source: 'close sideboard', target: '隱藏戰報' },
  { source: 'settings', target: '設定' },
  { source: 'death audio', target: '陣亡音效' },
  { source: 'game language', target: '選擇語言（重啟或重新整理後生效）' },
  { source: 'zh-CN', target: '简体中文' },
  { source: 'zh-TW', target: '繁體中文' },
  { source: 'zh-HK', target: '繁體中文（香港）' },
  { source: 'en-US', target: 'English' },
];

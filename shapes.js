/*
 * 形状处理模块 - 处理所有形状相关的操作
 */

/**
 * 计算矩形顶点坐标
 * @param {number} x - 起始X坐标
 * @param {number} y - 起始Y坐标
 * @param {number} width - 宽度
 * @param {number} height - 高度
 * @returns {Array} - 返回顶点坐标数组
 */
function calculateRectangleVertices(x, y, width, height) {
  return [
    { x, y },
    { x: x + width, y },
    { x: x + width, y: y + height },
    { x, y: y + height }
  ];
}

/**
 * 计算L形顶点坐标
 * @param {number} x - 起始X坐标
 * @param {number} y - 起始Y坐标
 * @param {number} width - 总宽度
 * @param {number} height - 总高度
 * @param {number} legWidth - L形腿宽度
 * @param {number} legHeight - L形腿高度
 * @returns {Array} - 返回顶点坐标数组
 */
function calculateLShapeVertices(x, y, width, height, legWidth, legHeight) {
  return [
    { x, y },
    { x: x + width, y },
    { x: x + width, y: y + legHeight },
    { x: x + legWidth, y: y + legHeight },
    { x: x + legWidth, y: y + height },
    { x, y: y + height }
  ];
}

/**
 * 计算U形顶点坐标
 * @param {number} x - 起始X坐标
 * @param {number} y - 起始Y坐标
 * @param {number} width - 总宽度
 * @param {number} height - 总高度
 * @param {number} legWidth - U形腿宽度
 * @param {number} legHeight - U形腿高度
 * @returns {Array} - 返回顶点坐标数组
 */
function calculateUShapeVertices(x, y, width, height, legWidth, legHeight) {
  return [
    { x, y },
    { x: x + width, y },
    { x: x + width, y: y + height },
    { x: x + width - legWidth, y: y + height },
    { x: x + width - legWidth, y: y + legHeight },
    { x: x + legWidth, y: y + legHeight },
    { x: x + legWidth, y: y + height },
    { x, y: y + height }
  ];
}

/**
 * 计算双腿矩形顶点坐标
 * @param {number} x - 起始X坐标
 * @param {number} y - 起始Y坐标
 * @param {number} width - 总宽度
 * @param {number} height - 总高度
 * @param {number} legWidth - 腿宽度
 * @param {number} legHeight - 腿高度
 * @returns {Array} - 返回顶点坐标数组
 */
function calculateDoubleLeggedRectangleVertices(x, y, width, height, legWidth, legHeight) {
  return [
    { x, y },
    { x: x + legWidth, y },
    { x: x + legWidth, y: y + legHeight },
    { x: x + width - legWidth, y: y + legHeight },
    { x: x + width - legWidth, y },
    { x: x + width, y },
    { x: x + width, y: y + height },
    { x: x + width - legWidth, y: y + height },
    { x: x + width - legWidth, y: y + height - legHeight },
    { x: x + legWidth, y: y + height - legHeight },
    { x: x + legWidth, y: y + height },
    { x, y: y + height }
  ];
}

export {
  calculateRectangleVertices,
  calculateLShapeVertices,
  calculateUShapeVertices,
  calculateDoubleLeggedRectangleVertices
};
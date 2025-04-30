/*
 * Canvas模块 - 处理所有与画布相关的操作
 */

/**
 * 初始化画布
 * @param {string} canvasId - 画布元素ID
 * @returns {Object} - 返回画布和上下文对象
 */
function initCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  return { canvas, ctx };
}

/**
 * 清除画布
 * @param {CanvasRenderingContext2D} ctx - 画布上下文
 * @param {number} width - 画布宽度
 * @param {number} height - 画布高度
 */
function clearCanvas(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);
}

/**
 * 绘制矩形
 * @param {CanvasRenderingContext2D} ctx - 画布上下文
 * @param {number} x - 起始X坐标
 * @param {number} y - 起始Y坐标
 * @param {number} width - 宽度
 * @param {number} height - 高度
 * @param {string} color - 填充颜色
 * @param {number} opacity - 透明度
 */
function drawRect(ctx, x, y, width, height, color, opacity) {
  ctx.fillStyle = hexToRgba(color, opacity);
  ctx.fillRect(x, y, width, height);
}

/**
 * 绘制多边形
 * @param {CanvasRenderingContext2D} ctx - 画布上下文
 * @param {Array} vertices - 顶点坐标数组
 * @param {string} color - 填充颜色
 * @param {number} opacity - 透明度
 */
function drawPolygon(ctx, vertices, color, opacity) {
  if (vertices.length < 3) return;

  ctx.fillStyle = hexToRgba(color, opacity);
  ctx.beginPath();
  ctx.moveTo(vertices[0].x, vertices[0].y);
  
  for (let i = 1; i < vertices.length; i++) {
    ctx.lineTo(vertices[i].x, vertices[i].y);
  }
  
  ctx.closePath();
  ctx.fill();
}

/**
 * 将十六进制颜色转换为RGBA格式
 * @param {string} hex - 十六进制颜色值
 * @param {number} opacity - 透明度
 * @returns {string} - RGBA颜色字符串
 */
function hexToRgba(hex, opacity) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export {
  initCanvas,
  clearCanvas,
  drawRect,
  drawPolygon,
  hexToRgba
};
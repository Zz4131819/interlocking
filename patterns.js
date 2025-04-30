/*
 * 图案生成模块 - 处理所有图案生成逻辑
 */

/**
 * 创建棋盘格图案
 * @param {CanvasRenderingContext2D} ctx - 画布上下文
 * @param {number} rows - 行数
 * @param {number} cols - 列数
 * @param {string} color1 - 第一种颜色
 * @param {string} color2 - 第二种颜色
 * @return {CanvasPattern} - 返回创建的图案对象
 */
function createCheckerboardPattern(ctx, rows, cols, color1, color2) {
  const patternCanvas = document.createElement("canvas");
  // Ensure minimum dimensions of 1 pixel if cellSize is 0
  const width = Math.max(1, cellSize * cols);
  const height = Math.max(1, cellSize * rows);
  patternCanvas.width = width;
  patternCanvas.height = height;
  const pCtx = patternCanvas.getContext("2d");

  pCtx.fillStyle = color1;
  pCtx.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
  pCtx.fillStyle = color2;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if ((i + j) % 2 === 0) {
        pCtx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
      }
    }
  }

  return ctx.createPattern(patternCanvas, "repeat");
}

/**
 * 创建边框图案
 * @param {CanvasRenderingContext2D} ctx - 画布上下文
 * @param {number} rows - 总行数
 * @param {number} cols - 总列数
 * @param {number[]} outerRows - 外圈行范围
 * @param {number[]} outerCols - 外圈列范围
 * @param {string} outerColor - 外圈颜色
 * @param {number[]} innerRows - 内圈行范围
 * @param {number[]} innerCols - 内圈列范围
 * @param {string} innerColor - 内圈颜色
 * @param {string} centerColor - 中心区域颜色
 * @return {CanvasPattern} - 返回创建的图案对象
 */
function createBorderPattern(
  ctx,
  rows,
  cols,
  outerRows,
  outerCols,
  outerColor,
  innerRows,
  innerCols,
  innerColor,
  centerColor
) {
  const patternCanvas = document.createElement("canvas");
  // Ensure minimum dimensions of 1 pixel if cellSize is 0
  const width = Math.max(1, cellSize * cols);
  const height = Math.max(1, cellSize * rows);
  patternCanvas.width = width;
  patternCanvas.height = height;
  const pCtx = patternCanvas.getContext("2d");

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      let fillColor = centerColor;

      // 外圈判断
      if (
        i <= outerRows[0] ||
        i >= outerRows[1] ||
        j <= outerCols[0] ||
        j >= outerCols[1]
      ) {
        fillColor = outerColor;
      }
      // 内圈判断
      else if (
        i <= innerRows[0] ||
        i >= innerRows[1] ||
        j <= innerCols[0] ||
        j >= innerCols[1]
      ) {
        fillColor = innerColor;
      }

      pCtx.fillStyle = fillColor;
      pCtx.fillRect((j - 1) * cellSize, (i - 1) * cellSize, cellSize, cellSize);
    }
  }

  return ctx.createPattern(patternCanvas, "repeat");
}

/**
 * 创建自定义边框图案
 * @param {CanvasRenderingContext2D} ctx - 画布上下文
 * @param {number} rows - 总行数
 * @param {number} cols - 总列数
 * @param {number[]} firstLastRows - 首尾行范围
 * @param {number[]} firstLastCols - 首尾列范围
 * @param {string} firstLastColor - 首尾行颜色
 * @param {number[]} secondRows - 第二行范围
 * @param {number[]} secondCols - 第二列范围
 * @param {string} secondColor - 第二行颜色
 * @param {string} defaultColor - 默认颜色
 * @return {CanvasPattern} - 返回创建的图案对象
 */
function createCustomBorderPattern(
  ctx,
  rows,
  cols,
  firstLastRows,
  firstLastCols,
  firstLastColor,
  secondRows,
  secondCols,
  secondColor,
  defaultColor
) {
  const patternCanvas = document.createElement("canvas");
  // Ensure minimum dimensions of 1 pixel if cellSize is 0
  const width = Math.max(1, cellSize * cols);
  const height = Math.max(1, cellSize * rows);
  patternCanvas.width = width;
  patternCanvas.height = height;
  const pCtx = patternCanvas.getContext("2d");

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      let fillColor = defaultColor;

      // 首尾行判断
      if (i <= firstLastRows[0] || i >= firstLastRows[1]) {
        fillColor = firstLastColor;
      }
      // 第二行判断
      else if (i <= secondRows[0] || i >= secondRows[1]) {
        fillColor =
          j <= secondCols[0] || j >= secondCols[1]
            ? firstLastColor
            : secondColor;
      }
      // 其他行判断
      else {
        fillColor =
          j <= firstLastCols[0] || j >= firstLastCols[1]
            ? firstLastColor
            : j <= secondCols[0] || j >= secondCols[1]
            ? secondColor
            : defaultColor;
      }

      pCtx.fillStyle = fillColor;
      pCtx.fillRect((j - 1) * cellSize, (i - 1) * cellSize, cellSize, cellSize);
    }
  }

  return ctx.createPattern(patternCanvas, "repeat");
}

export {
  createCheckerboardPattern,
  createBorderPattern,
  createCustomBorderPattern
};
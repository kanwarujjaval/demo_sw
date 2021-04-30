/**
 * @swagger
 * definitions:
 *   ExportData:
 *    type: "object"
 *    properties: 
 *      id: 
 *        type: "string"
 *        example: "populator"
 *      name: 
 *        type: "string"
 *        example: "Populator Templates"
 *      children: 
 *        type: "array"
 *        items: 
 *          type: "object"
 *          properties: 
 *            id: 
 *              type: "string"
 *              example: "600931167382d5f70c959d22"
 *            name: 
 *              type: "string"
 *              example: "cool populator template"
 *            selected: 
 *              type: "boolean"
 *              example: true
 * 
 */
/**
 * @swagger
 * /o/export:
 *   post:
 *     tags:
 *     - "config-transfer"
 *     summary: "Export configuration"
 *     description: "Export configuration state for selected plugins and all their dependent plugin configurations"
 *     operationId: "exportConfig"
 *     consumes:
 *     - "application/json"
 *     produces:
 *     - "application/json"
 *     parameters:
 *     - in: "body"
 *       name: "body"
 *       description: "List of Exported Plugins"
 *       required: true
 *       schema:
 *         type: array
 *         items: 
 *           $ref: "#/definitions/ExportData"
 *     responses:
 *       "200":
 *         description: "Importable JSON"
 */
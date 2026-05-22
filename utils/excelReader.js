const ExcelJS = require('exceljs');

async function readSkillsFromExcel(filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const sheet = workbook.getWorksheet('Publish Skills');
  const skills = [];

  sheet.eachRow((row, rowNum) => {
    if (rowNum === 1) return;
    skills.push({
      slug:         String(row.getCell(1).value),
      display_name: String(row.getCell(2).value),
      version:      String(row.getCell(3).value),
      tags:         String(row.getCell(4).value),
      folder_path:  String(row.getCell(5).value),
      changelog:    String(row.getCell(6).value),
    });
  });

  return skills;
}

module.exports = { readSkillsFromExcel };

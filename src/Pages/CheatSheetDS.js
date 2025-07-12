import React from 'react';
import CheatSheetLayout from '../components/CheatSheetLayout';

const dsCheats = Array.from({ length: 50 }, (_, i) => ({
  title: `Data Structures Cheat Sheet #${i + 1}`,
  code: `// DS Example ${i + 1}\n// Your DS code here`
}));

function CheatSheetDS() {
  return <CheatSheetLayout title="Data Structures Cheat Sheets" cheats={dsCheats} />;
}

export default CheatSheetDS; 
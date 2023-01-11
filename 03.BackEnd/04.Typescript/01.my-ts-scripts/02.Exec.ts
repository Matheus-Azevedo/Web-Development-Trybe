interface Medida {
  value: number;
  unitBase: string;
  unitTarget: string;
}

const medidas: Medida[] = [
  {
    value: 15,
    unitBase: 'cm',
    unitTarget: 'm',
  },
  {
    value: 12,
    unitBase: 'm',
    unitTarget: 'cm',
  },
  {
    value: 14,
    unitBase: 'cm',
    unitTarget: 'mm',
  },
  {
    value: 18,
    unitBase: 'mm',
    unitTarget: 'cm',
  },
  {
    value: 20,
    unitBase: 'km',
    unitTarget: 'm',
  },
  {
    value: 22,
    unitBase: 'm',
    unitTarget: 'dam',
  },
  {
    value: 24,
    unitBase: 'dam',
    unitTarget: 'hm',
  },
];

interface Padrao {
  [key: string]: number;
}

const padrao: Padrao = {
  m: 1,
  dm: 0.1,
  cm: 0.01,
  mm: 0.001,
  dam: 10,
  hm: 100,
  km: 1000,
};


function convert(value: number, unitBase: string, unitTarget: string) {
  const valueBase = value * padrao[unitBase];
  const valueTarget = valueBase / padrao[unitTarget];
  console.log(`${value} ${unitBase} = ${valueTarget} ${unitTarget}`);
}

medidas.forEach((medida) => {
  convert(medida.value, medida.unitBase, medida.unitTarget);
}
);
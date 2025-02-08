module.exports = (req, res) => {
    const vendedores = [
      { id: 1, nombre: "Juan", ventas: 1200 },
      { id: 2, nombre: "Maria", ventas: 1500 }
    ];
    res.status(200).json(vendedores);
  };
  

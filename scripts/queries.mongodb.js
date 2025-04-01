db.reservas.aggregate([
  { $match: { estado: { $in: ["confirmada", "pendiente"] } } },
  {
    $group: {
      _id: "$cliente_id",
      reservas_activas: { $sum: 1 },
    },
  },
  {
    $lookup: {
      from: "clientes",
      localField: "_id",
      foreignField: "_id",
      as: "cliente",
    },
  },
  { $unwind: "$cliente" },
  {
    $project: {
      _id: 0,
      cliente_id: "$_id",
      nombre: "$cliente.nombre",
      correo: "$cliente.correo",
      reservas_activas: 1,
    },
  },
]);

db.reservas.aggregate([
  { $match: { estado: "cancelada" } },
  {
    $group: {
      _id: "$cliente_id",
    },
  },
  {
    $lookup: {
      from: "clientes",
      localField: "_id",
      foreignField: "_id",
      as: "cliente",
    },
  },
  { $unwind: "$cliente" },
  {
    $project: {
      _id: 0,
      cliente_id: "$_id",
      nombre: "$cliente.nombre",
      correo: "$cliente.correo",
    },
  },
]);

db.habitaciones.aggregate([
  { $match: { estado: "ocupada" } },
  {
    $group: {
      _id: null,
      total_precio_noche: { $sum: "$precio_noche" },
    },
  },
  {
    $project: {
      _id: 0,
      total_precio_noche: 1,
    },
  },
]);

db.reservas.aggregate([
  { $match: { estado: "cancelada", fecha_ingreso: { $gte: "2025-10-15" } } },
  {
    $project: {
      _id: 0,
      cliente_id: 1,
      cliente_email: 1,
      fecha_ingreso: 1,
    },
  },
]);

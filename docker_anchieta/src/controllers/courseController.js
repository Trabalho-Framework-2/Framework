const db = require('../models');

module.exports = {
  // GET /courses
  async list(req, res) {
    try {
      const courses = await db.Course.findAll({ order: [['id', 'ASC']] });
      return res.json(courses);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao listar cursos' });
    }
  },

  // POST /courses
  async create(req, res) {
    try {
      const { nome, periodo, modulo } = req.body;
      if (!nome || !periodo || !modulo) {
        return res.status(400).json({ error: 'Campos obrigatórios: nome, periodo, modulo' });
      }
      const course = await db.Course.create({ nome, periodo, modulo });
      return res.status(201).json(course);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao criar curso' });
    }
  },
};

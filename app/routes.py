
from flask import request, jsonify
from flask_jwt_extended import jwt_required
from app import app, db, Task

@app.route('/tasks', methods=['POST'])
@jwt_required()
def create_task():
    title = request.json.get('title')
    description = request.json.get('description')
    new_task = Task(title=title, description=description)
    db.session.add(new_task)
    db.session.commit()
    return jsonify({'msg': 'Task created'}), 201

@app.route('/tasks', methods=['GET'])
@jwt_required()
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{'id': task.id, 'title': task.title, 'completed': task.completed} for task in tasks]), 200

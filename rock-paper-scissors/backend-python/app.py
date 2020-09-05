# Importing flask for API creation
from flask import Flask, request, jsonify
from flask_cors import CORS

# Importing the game engine
from GameEngine import GameEngine 

# Initiating the game engine in memory
game = GameEngine()

# Initiating the app object 
app = Flask(__name__)

# Enabling CORS
CORS(app)

# Initial endpoint
@app.route('/')
def home():
    return "Welcome to the rock paper scissors game!!!"

# Endpoint for the game 
@app.route('/game')
def rps_game():
    """
    The game for rock paper scissors
    """
    # Getting the user outcome
    user_outcome = request.args.get("outcome")

    # Ensuring lowercase
    user_outcome = user_outcome.lower()

    # Generating outcome for the computer
    computer_outcome = game.generate_outcome()

    # Comparing the two
    final_outcome = game.compare_outcomes(computer_outcome, user_outcome)

    # Returning a json with the outcome
    return jsonify({
        'outcome': final_outcome,
        'computer_sign': computer_outcome
    })

# Running the application
if __name__ == '__main__':
    app.jinja_env.auto_reload = True
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(host='0.0.0.0')
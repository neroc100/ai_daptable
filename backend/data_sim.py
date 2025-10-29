import numpy as np
import random
import csv
from datetime import datetime

def simulate_experiment(num_participants: int = 10, num_conditions: int = 6, num_trials: int = 15):
    trials = []
    for j in range(1, num_conditions + 1):
        for i in range(1, num_participants + 1  ):
            for k in range(1, num_trials + 1):
                trial = simulate_trial(i, j, k)
                trials.append(trial)
    return trials


def simulate_trial(participant: int, condition: int, trial_id: int):
    # simulate mental effort rating
    mental_effort_rating = np.random.normal(75, 20)
    mental_effort_rating = max(0, min(mental_effort_rating, 150))

    # simulate reaction time
    reaction_time_ms = np.random.normal(8000, 6000)
    reaction_time_ms = max(100, min(reaction_time_ms, 40000))



    participant_id = f"{condition}_{participant}" 

    return {
        "participant_id": participant_id,
        "condition":condition,
        "trial_id": trial_id,
        "true_classification": trial_id % 2,
        "mental_effort_rating": round(mental_effort_rating),
        "reaction_time_ms": round(reaction_time_ms),
        "accuracy": np.random.binomial(1, 0.9),
        "view_information_clicked": np.random.binomial(1, 0.4),
    }


def export_to_csv(trials, filename="simulated_trials.csv"):
    """
    Export trials to a CSV file.
    
    Args:
        trials: List of trial dictionaries
        filename: Name of the CSV file to create
    """
    if not trials:
        print("No trials to export")
        return
    
    # Get field names from the first trial
    fieldnames = trials[0].keys()
    
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(trials)
    
    print(f"Successfully exported {len(trials)} trials to {filename}")


if __name__ == "__main__":
    

    num_participants = 10 # number of participants per condition
    num_conditions = 6 # number of conditions
    num_trials = 12 # number of trials per participant per condition

    # Simulate experiment
    trials = simulate_experiment(num_participants, num_conditions, num_trials)
    
    # get date and determine csv file name
    date = datetime.now().strftime("%Y-%m-%d")
    csv_file_name = f"data/{date}_p{num_participants}_c{num_conditions}_t{num_trials}.csv"
   
    # Export data to CSV
    export_to_csv(trials, csv_file_name)
    
    # Print summary
    print(f"\nSimulation Summary:")
    print(f"Total trials: {len(trials)}")
    print(f"Total participants: {len(set(t['participant_id'] for t in trials))}")
    print(f"Average mental effort: {sum(t['mental_effort_rating'] for t in trials) / len(trials):.1f}")
    print(f"Average reaction time: {sum(t['reaction_time_ms'] for t in trials) / len(trials):.0f} ms")
    print(f"Overall accuracy: {sum(t['accuracy'] for t in trials) / len(trials) * 100:.1f}%")
    print(f"Overall view information clicked: {sum(t['view_information_clicked'] for t in trials) / len(trials) * 100:.1f}%")
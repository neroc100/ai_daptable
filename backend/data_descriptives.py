import pandas as pd
import os
import json

# Read the CSV file
csv_file = '2025-09-19-adaptable-n1.csv'

if os.path.exists(csv_file):
    # Read CSV into pandas DataFrame
    df = pd.read_csv(csv_file)
    

    print("=== TRIALS DATA ===")
    print(f"Total trials: {len(df)}")
    print(f"Columns: {list(df.columns)}")
    print("\n=== FIRST 5 ROWS ===")
    print(df.head())
    
    print("\n=== SUMMARY STATISTICS ===")
    print(df.describe())
    
   
    print("\n=== ACCURACY BY CONDITION ===")
    accuracy_by_condition = df.groupby('condition')['accuracy'].agg(['count', 'mean', 'median'])
    print(accuracy_by_condition)

    print("\n=== REACTION TIME BY CONDITION ===")
    rt_by_condition = df.groupby('condition')['reaction_time_ms'].agg(['count', 'mean', 'median', 'min', 'max'])
    print(rt_by_condition)

    print("\n=== MENTAL EFFORT RATING BY CONDITION ===")
    effort_by_condition = df.groupby('condition')['mental_effort_rating'].agg(['count', 'mean', 'median', 'min', 'max'])
    print(effort_by_condition)

    print("\n=== VIEW INFORMATION CLICKED BY CONDITION ===")
    info_by_condition = df.groupby('condition')['view_information_clicked'].agg(['count','sum', 'mean', 'median'])
    print(info_by_condition)
    
    print("\n=== HUMAN ACTIONS ===")
    print(df['human_action'].value_counts())

   

    def count_conditions_seen(x):
        try:
            lst = json.loads(x)
            return len(lst) if isinstance(lst, list) else float('nan')
        except Exception:
            return float('nan')

    df['num_conditions_seen'] = df['conditions_seen'].apply(count_conditions_seen)

    print("\n=== TRIALS PER CONDITION ===")
    trials_per_condition = df['condition'].value_counts().sort_index()
    print(trials_per_condition)

    print("\n=== AVERAGE NUMBER OF CONDITIONS SEEN PER TRIAL IN ADAPTABLE CONDITION ===")
    # Filter to only trials where adaptable is True/1
    adaptable_df = df[df['adaptable'] == True]
    # Compute number of conditions seen as length of list in conditions_seen
    adaptable_df = adaptable_df.copy()
    adaptable_df['num_conditions_seen'] = adaptable_df['conditions_seen'].apply(count_conditions_seen)
    avg_conditions_seen = adaptable_df['num_conditions_seen'].mean()
    print(avg_conditions_seen)
    
    
else:
    print(f"File {csv_file} not found!")

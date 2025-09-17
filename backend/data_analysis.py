import pandas as pd
import os

# Read the CSV file
csv_file = '2025_09_17_all_conditions_n1.csv'

if os.path.exists(csv_file):
    # Read CSV into pandas DataFrame
    df = pd.read_csv(csv_file)
    
    df.head(100)

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
    
    
else:
    print(f"File {csv_file} not found!")

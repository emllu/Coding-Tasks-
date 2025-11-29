import re 
from collections import defaultdict
def analyze_text (text):
    """
    Analyze the given text and return various statistics.
    
    Args:
        text (str): The input text to analyze
        
    Returns:
        dict: A dictionary containing:
            - word_count (int): Total number of words
            - average_word_length (float): Average length of words (2 decimal places)
            - longest_words (list): List of longest word(s)
            - word_frequency (dict): Frequency of each word (case-insensitive)
    """
    if not text.strip():
        return {
            "word_count": 0,
            "average_word_length": 0.0,
            "longest_words": [],
            "word_frequency": {}
        }
    
    # split into worrds (handling pucntuation and mu;tiple spaces)
    words =re.findall(r'\b\w+\b',text.lower())
    # calculate statistics 
    unique_words = list(dict.fromkeys(words))  # Remove duplicates while preserving order
    print("unique_words",unique_words)
     # Count only unique words
    word_count = len(unique_words) 
    print("word_count",word_count)
    # calclualting the total length 
    total_length = sum(len(word) for word in words)
    # finding average length value with 2 decimals
    average_length = round(total_length / len(words), 2) if words else 0  # Use total words for average
    # longest words calculation
    max_length=max(len(word) for word in words) if words else 0
    longest_words=[word for word in words if len(word) == max_length]
    # removed duplicates
    longest_words=list(dict.fromkeys(longest_words))
    # calculate word frequency
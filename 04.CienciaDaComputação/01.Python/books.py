import requests
import json


def get_books() -> list:
    url = 'https://lms-assets.betrybe.com/lms/books.json'
    response = requests.get(url)
    data = json.loads(response.text)
    return data


def books_count_category(books: list) -> dict:
    categories = dict()
    for book in books:
        for category in book['categories']:
            if category not in categories:
                categories[category] = 1
            else:
                categories[category] += 1
    return categories


def calculate_percentage(books: list, categories: dict) -> dict:
    total_books = len(books)
    for category in categories:
        value = round((categories[category] / total_books) * 100, 2)
        categories[category] = f'{value}%'
    return categories


print(calculate_percentage(get_books(), books_count_category(get_books())))
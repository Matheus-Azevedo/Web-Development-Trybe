import requests
import json
import csv


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


def save_in_CSV_file(categories: dict) -> None:
    with open('./categories.csv', 'w') as file:
        writer = csv.writer(file)
        writer.writerow(['Category', 'Percentage'])
        for category in categories:
            writer.writerow([category, categories[category]])
    print('File saved successfully!')


if __name__ == '__main__':
    books = get_books()
    categories = books_count_category(books)
    categories_by_percentage = calculate_percentage(books, categories)
    save_in_CSV_file(categories_by_percentage)

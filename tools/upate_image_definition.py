import os

IMAGE_EXTENSIONS =('.jpg', '.jpeg', '.png', '.gif')
PHOTOS_DIR = '../photos'
def collect_images_name():
    images_name = []
    for root, dirs, files in os.walk(PHOTOS_DIR):
        for file in files:
            if file.endswith(IMAGE_EXTENSIONS):
                images_name.append(file)
    if not images_name:
        raise ValueError(f"No image files found in {PHOTOS_DIR}.")
    return images_name

JS_CODE_CONSTANTS_PRE = 'const photos = ['
JS_CODE_CONSTANTS_POST = '];'

def combine_images_name(images_name):
    combined_images_name = ','.join(f'"{name}"' for name in images_name)
    return f'{JS_CODE_CONSTANTS_PRE}{combined_images_name}{JS_CODE_CONSTANTS_POST}'

JS_DEFINITION_FILE = '../js/photo_name_def.js'
def update_js_image_definition_code(images_name):
    js_code = combine_images_name(images_name)
    with open(JS_DEFINITION_FILE, 'w', encoding='utf-8') as f:
        f.write(js_code)

if __name__ == '__main__':
    update_js_image_definition_code(collect_images_name())
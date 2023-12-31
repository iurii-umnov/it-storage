const Config = {
  MIN_USERNAME_LENGTH: 3,
  MAX_USERNAME_LENGTH: 16,
  MIN_PWD_LENGTH: 8,
  MAX_PWD_LENGTH: 20,
  MIN_TITLE_LENGTH: 2,
  MAX_TITLE_LENGTH: 64,
  MIN_TAG_LENGTH: 2,
  MAX_TAG_LENGTH: 25,
  MAX_ANNOTATION_LENGTH: 250,
  USERNAME_ALLOWED_CHARS: '-_',
  TAG_ALLOWED_CHARS: '-_.+#',
  MAX_NAME_LENGTH: 20,
  MAX_TUTORIAL_SIZE: 1024 * 64,
  MAX_N_TAGS: 5
};

const API_URL = 'http://127.0.0.1:5000/api/v1';

export { Config, API_URL };
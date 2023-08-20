<div align="center">
  <h1 align="center">AL-QURAN <br> UNOFFICIAL API </br></h1>
</div>

## About

Al-quran api adalah sebuah api yang berisi data-data ayat-ayat al-quran yang diambil dari [Lite Quran](https://litequran.net/).

### Requirement

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/fxthur/notes-app-be
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run
   ```js
   npm start dev
   ```

## Fitur

- Melihat semua list Ayat Ayat Alquran
- Melihat ayat alquran by nama surah

## Docs

Api ini mungkin akan update kedepanya, karna saya masih pemula puh, jadi mohon maaf jika ada kesalahan dalam pembuatan api ini.

#### Check Status

```http
  GET /
```

#### Melihat list surah

```http
  GET /api/list
```

#### Melihat surah by name

```http
  GET /api/surat/${nameSurah}
```

## Notes

Check official link API with api.allorigins.win
[Click Me](https://api.allorigins.win/raw?url=https://litequran.net/)

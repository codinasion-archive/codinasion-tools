## Table of contents

- [Table of contents](#table-of-contents)
- [Project Structure](#project-structure)
- [Backend](#backend)
  - [Setup](#setup)
- [Docs](#docs)
- [NPM](#npm)
  - [Setup](#setup-1)
  - [How To Add NPM Tool](#how-to-add-npm-tool)
- [PIP](#pip)
  - [Setup](#setup-2)
  - [How To Add PIP Tool](#how-to-add-pip-tool)
- [Website](#website)
  - [Setup](#setup-3)

## Project Structure

Basic folder structure of the project is as follows:

```bash
.
├── backend     # Django Backend
├── docs        # Documentation
├── npm         # NPM Files
├── pip         # Pip Files
└── website     # NextJs Website
```

## Backend

### Setup

```bash
cd backend                      # Change directory to backend
python3 -m venv .venv           # Create virtual environment
source .venv/bin/activate       # Activate virtual environment
pip install -r requirements.txt # Install requirements
python manage.py runserver      # Run server
```

Open [http://localhost:8000](http://localhost:8000) with your browser to see the result.

## Docs

```bash
docs
└── add-two-numbers     # Tool Name in kebab-case
    ├── README.md       # Tools Readme (How to Use)
    ├── test.js         # JavaScript Use Case
    ├── test.py         # Python Use Case
    ├── test.sh         # API Use Case
    └── test.ts         # TypeScript Use Case
```

## NPM

```bash
npm
├── jestconfig.json
├── package.json
├── README.md
├── src
│   ├── add-two-numbers     # Tool Name in kebab-case
│   │   ├── index.ts        # Tool Code
│   │   └── __test__
│   │       └── test.ts     # Tool Test Code
│   └── index.ts            # Tools Export(s)
├── tsconfig.json
├── tslint.json
└── yarn.lock
```

### Setup

```bash
cd npm      # Change directory to npm
yarn        # Install dependencies
```

### How To Add NPM Tool

> **Note** Keep Tool Function name in `PascalCase` and Tool File name in `kebab-case`

1. Add the `Tool Source Code` in

   ```bash
   npm
   └── src
      └── tool-name       # Tool Name in kebab-case
          └── index.ts    # Tool Source Code
   ```

2. Add the `Tools Test Code` in

   ```bash
   npm
   └── src
      └── tool-name           # Tool Name in kebab-case
          └── __test__
              └── test.ts     # Tool Test Code
   ```

3. Add the `Tool Export` in

   ```bash
   npm
   ├── jestconfig.json
   ├── package.json
   ├── README.md
   └── src
      └── index.ts    # Tools Export
   ```

   ```ts
   ...
   import ToolName from "./tool-name";     // Import Local Tool

   export {
       ...,
       ToolName,                           // Export NPM Tool
   };
   ```

4. Test Before `Commit`

   ```bash
   yarn run check
   ```

## PIP

```bash
pip
├── codinasion_tools                # PIP Package
│   ├── add_two_numbers.py          # Tools Code / Tools Name in snake_case
│   └── __init__.py                 # Tools Export
├── PUBLISH.md
├── README.md
├── requirements.txt
├── setup.py
├── tests
│   └── test_add_two_numbers.py     # Tool Test
└── tox.ini
```

### Setup

```bash
cd pip                          # Change directory to pip
python3 -m venv .venv           # Create virtual environment
source .venv/bin/activate       # Activate virtual environment
pip install -r requirements.txt # Install requirements
```

### How To Add PIP Tool

> **Note** Keep Tool Function name in `PascalCase` and Tool File name in `snake_case`

1. Add the `Tool Source Code` in

   ```bash
   pip
   └── codinasion_tools
      └── tool_name.py    # Tools Code / Tools Name in snake_case
   ```

2. Add the `Tools Test Code` in

   ```bash
   pip
   └── tests
      └── test_tool_name.py   # Tool Test
   ```

3. Add the `Tool Export` in

   ```bash
   pip
   └── codinasion_tools
      └── __init__.py     # Tools Export
   ```

   ```python
   from .tool_name import ToolName
   ```

4. Test Before `Commit`

   ```bash
   tox
   ```

## Website

### Setup

```bash
cd website      # Change directory to website
yarn            # Install dependencies
yarn dev        # Run local server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

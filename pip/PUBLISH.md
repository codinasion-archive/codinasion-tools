# Pypi publish

## Test Tools

```bash
tox
```

## Build

```bash
python setup.py sdist bdist_wheel
```

## Test

```bash
twine check dist/*
```

## Publish

```bash
twine upload dist/*
```

## Clean

```bash
rm -rf build dist .egg *.egg-info
```

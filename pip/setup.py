import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="opentoolshub",
    version="0.0.4",
    author="Harsh Raj",
    author_email="harshraj8843@gmail.com",
    description="A collection of useful open source tools",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/codinasion/open-tools",
    project_urls={
        "Bug Tracker": "https://github.com/codinasion/open-tools/issues",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.10",
        "Topic :: Software Development :: Libraries :: Python Modules",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    packages=["opentoolshub"],
    python_requires=">=3.10",
    install_requires=[],
)

import { Button, DarkButton } from "./button.js";
import { Component, DarkComponent, WhiteComponent } from "./component.js";
import { DarkText, Text, WhiteText } from "./text.js";

export interface AbstractFactory {
    createButton(): Button;
    createComponent(): Component;
    createText(): Text;
}

export class DarkModeFactory implements AbstractFactory {
    createButton(): Button {
        return new DarkButton();
    }
    createComponent(): Component {
        return new DarkComponent();
    }
    createText(): Text {
        return new WhiteText();
    }
}

export class WhiteModeFactory implements AbstractFactory {
    createButton(): Button {
        return new WhiteButton();
    }
    createComponent(): Component {
        return new WhiteComponent();
    }
    createText(): Text {
        return new DarkText();
    }
}

function batch(factory: AbstractFactory) {
    const button = factory.createButton();
    const component = factory.createComponent();
    const text = factory.createText();

    // UI 상에 적당히 배치
}


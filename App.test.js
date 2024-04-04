import { render, screen, fireEvent, act } from "@testing-library/react-native";
import App from "./App";
import * as Haptics from "expo-haptics";
import { fakeContactData } from "./__mocks__/expo-contacts";

jest.mock("expo-haptics");

test("Renders text on screen", () => {
  const allQuestions = ["q1", "q2"];
  const mockFn = jest.fn();

  render(<App />);

  const heading = screen.getByText("Hybrid App Development Week Assignment 2");
  expect(heading).toBeTruthy();
});

test('Button with "Open Contacts" text is rendered', () => {
  render(<App />);
  const button = screen.getByText("Open Contacts");
  expect(button).toBeTruthy();
});

test("Contacts list is not rendered before the button is pressed", () => {
  render(<App />);
  const contactsList = screen.queryByText("Contacts list");
  expect(contactsList).toBeFalsy();
});

test("calls Haptics.selectionAsync when the button is pressed", async () => {
  render(<App />);
  await act(async () => {
    await fireEvent.press(screen.getByText("Open Contacts"));
  });

  // Ensure that Haptics.selectionAsync was called once
  expect(Haptics.selectionAsync).toHaveBeenCalledTimes(1);
});

test("Contacts list is rendered after the button is pressed", async () => {
  render(<App />);
  await act(async () => {
    await fireEvent.press(screen.getByText("Open Contacts"));
  });

  // Check that the contacts list is rendered
  const contactsList = screen.getByText("Contacts list:");
  expect(contactsList).toBeTruthy();

  // loop over fakeContactData and check if each contact is rendered
  fakeContactData.forEach((contact) => {
    const contactName = screen.getByText(contact.name);
    expect(contactName).toBeTruthy();
  });
});

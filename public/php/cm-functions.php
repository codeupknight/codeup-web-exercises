<?php
$message = false;

function loadContacts()
{
    $content = trim(file_get_contents('assets/contacts.txt'));
    $lines = explode("\n", $content);
    $contacts = [];
    foreach ($lines as $line) {
        $contact = explode('|', $line);
        addContact($contacts, $contact[0], $contact[1], $contact[2]);
    }
    return $contacts;
}

function addContact(&$contacts, $name, $number, $uniqueID)
{
    $contacts[] = [
        'name' => $name,
        'number' => $number,
        'contactID' => $uniqueID,
    ];
}


function searchContact($contacts, $query)
{
    $matches = [];
    foreach ($contacts as $contact) {
        if (strpos($contact['name'], $query) !== false) {
            $matches[] = $contact;
        }
    }
    return $matches;
}

function newContact(&$contacts, $newContact, &$message)
{
    $name = $newContact['name'];
    $number = $newContact['number'];
    $contactID = count($contacts);
    $matches = searchContact($contacts, $name);
    if (count($matches) > 0) {
        $message = "There's already a contact by that name. <br>Duplicate contact added. <br>File sorted alphabetically for easier view.";
    }
    addContact($contacts, $name, $number, uniqid());
    saveContacts($contacts);
}

function saveContacts($contacts)
{
    $content = '';
    foreach ($contacts as $contact) {
        $content .= implode('|', $contact) . "\n";
    }
    file_put_contents('assets/contacts.txt', $content);
}

function deleteContacts(&$contacts, $name)
{
    foreach ($contacts as $index => $contact) {
        if (strpos($contact['contactID'], $name) !== false) {
            unset($contacts[$index]);
        }
    }
    saveContacts($contacts);
}

function displayHidden($message) {
	if ($message !== "") {
		echo "hidden";
	}
}
//////////////////

$contacts = loadContacts();
if (isset($_GET['search-name'])) {
	$contacts = searchContact($contacts, $_GET['search-name']);
}
if (isset($_GET['sort'])) {
	sort($contacts);
}
if (isset($_POST['new-contact'])) {
	newContact($contacts, $_POST['new-contact'], $message);
}
if (isset($_GET['delete-contact'])) {
	deleteContacts($contacts, $_GET['delete-contact']);
}

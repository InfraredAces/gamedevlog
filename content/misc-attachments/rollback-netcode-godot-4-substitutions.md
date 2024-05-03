---
title: Rollback Netcode Addon - Godot 4 Substitutions
description:
aliases: []
tags: []
draft: false
date: 2024-05-01
---

```swift
onready var ... --> @onready var ...

NetworkedMultiplayerENet.new() --> ENetMultiplayerPeer.new()

get_tree().network_peer > multiplayer.multiplayer_peer

get_tree().connect("network_peer_connected", self, "_on_network_peer_connected") --> multiplayer.peer_connected.connect(_on_network_peer_connected)

get_tree().connect("network_peer_disconnected", self, "_on_network_peer_disconnected") --> multiplayer.peer_disconnected.connect(_on_network_peer_disconnected)

get_tree().connect("server_disconnected", self, "_on_server_disconnected") --> multiplayer.server_disconnected.connect(_on_server_disconnected)

get_tree().is_network_server() --> multiplayer.is_server()

yield(get_tree().create_timer(2.0), "timeout") --> await(get_tree().create_timer(2.0).timeout)

peer.close_connection() --> peer.close()

SyncManager.connect("sync_started", self, "_on_SyncManager_sync_started") --> SyncManager.sync_started.connect(_on_SyncManager_sync_started) <- we can extrapolate this for all SyncManager signals

set_network_master(1) --> set_multiplayer_authority(1)

get_tree().get_network_unique_id() --> multiplayer.get_unique_id()

PoolByteArray --> PackedByteArray

dir.dir_exists(LOG_FILE_DIRECTORY) --> DirAccess.dir_exists_absolute(LOG_FILE_DIRECTORY)

dir.make_dir(LOG_FILE_DIRECTORY) --> DirAccess.make_dir_absolute(LOG_FILE_DIRECTORY)

OS.get_datetime(true) --> Time.get_datetime_dict_from_system()

remotesync func setup_match(info: Dictionary) -> void:
-->
@rpc("any_peer", "call_local")
func setup_match(info: Dictionary) -> void:
```
